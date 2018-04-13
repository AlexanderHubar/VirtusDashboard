import React from 'react';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import './TopBar.css';

//components
import AccountDropdown from '../../atoms/AccountDropdown/AccountDropdown'
import userPhoto from '../../../assets/img/user-photo.png'
import Notification from "../Notification/Notification";
import AddProjectButton from "../../atoms/buttons/AddProjectButton/AddProjectButton";
import SearchButton from "../../atoms/buttons/SearchButton/SearchButton";
import Logo from '../../../assets/img/logo.png';


const userData = {
  name: localStorage.getItem("userName"),
  userPhoto: userPhoto
};


class TopBar extends React.Component {

  render() {
    return (
      <div className='TopBar'>
        <NavLink to="/" className="top-bar-left-side">
          <img className='logo' src={Logo} alt="Logo"/>
        </NavLink>

        <div className="user-panel">
          <AddProjectButton/>
          <SearchButton/>
          <Notification/>
          <AccountDropdown data={userData} />
        </div>
      </div>
    )
  }
}

export default withRouter(TopBar);