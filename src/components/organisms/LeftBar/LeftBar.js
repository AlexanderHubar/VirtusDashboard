import React from 'react';
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import './LeftBar.css'


//components
import IconMarker from "../../atoms/IconMarker/IconMarker";


class LeftBar extends React.Component {

  render() {

    return (
      <div
        className={'LeftBar'}
      >

        <nav className="nav-bar">
          <ul>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='home'
                /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/workflow">
                <FontAwesome
                  className='nav-icon nav-icon-bars'
                  name='bars'
                /></NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/raport">
                <FontAwesome
                  className='nav-icon nav-icon-chart-line'
                  name='chart-line'
                /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="wrapper-marker"
                activeClassName="activeLeftLink"
                exact
                to="/chats">
                <FontAwesome
                  className='nav-icon nav-icon-envelope'
                  name='envelope'
                />
                <IconMarker/>

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact to="/users">
                <FontAwesome
                  className='nav-icon nav-icon-users'
                  name='users'
                /></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftBar;