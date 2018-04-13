import React from 'react';
import {Col} from 'react-bootstrap/lib';
import './Inbox.css'

//components
import InboxHomeMessage from "../../molecules/InboxHomeMessage/InboxHomeMessage";


class Inbox extends React.Component {
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

  render() {
    return (
      <Col className="Inbox" md={3}>
        <div className="inbox-header">
          <p>Inbox
            (<span>{this.state.dataNoReaded.length}</span>)
          </p>
        </div>
        <InboxHomeMessage data={this.state.dataInbox}/>
      </Col>
    )
  }
}

export default Inbox;