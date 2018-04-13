import React from 'react';
import {withRouter} from 'react-router-dom';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
// import './NotificationButton.css'

//components
import NotificationButton from '../../atoms/buttons/NotificationButton/NotificationButton'
import InboxHomeMessage from "../../molecules/InboxHomeMessage/InboxHomeMessage";


class Notification extends React.Component  {

  constructor() {
    super();
    this.state = {
      dataInbox: [],
      dataNoReaded: []
    }
  }

  componentWillMount() {
    fetch('/api/user/messages/inbox', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataInbox: res,
          dataNoReaded: res.filter((el) => {
            return !el.readed && el
          })
        });

      })
  }

  render(){

    return(
      <Dropdown className="dropdown-button" ref="dropdown">
        <DropdownTrigger>

          <span className="dropdown-button__name">
          <NotificationButton/>
        </span>
        </DropdownTrigger>
        <DropdownContent className="dropdown__content-notification">

              <InboxHomeMessage  data={this.state.dataInbox.slice(0,5)}/>

        </DropdownContent>
      </Dropdown>

    )
  }

}


export default withRouter(Notification);