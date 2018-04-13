import React from 'react';
import FontAwesome from 'react-fontawesome';
import {withRouter} from 'react-router-dom';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import './DropdownButton.css'

class DropdownButton extends React.Component {

  handleLinkClick = () => {
    this.refs.dropdown.hide();
  };

  render() {
    return (
      <Dropdown className="dropdown-button" ref="dropdown">
        <DropdownTrigger>

          <span className="dropdown-button__name">
          <FontAwesome
            className='dropdown-dots'
            name='ellipsis-v'
          />
        </span>
        </DropdownTrigger>
        <DropdownContent className="dropdown-button-content">

          <ul className="dropdown-button__management-links dropdown-button__segment">

            <li className="dropdown-button__link">
              <a className="dropdown-button__link__anchor" onClick={this.handleLinkClick}>
                Settings
              </a>
            </li>

            <li className="dropdown-button__link">
              <a className="dropdown-button__link__anchor">
                More
              </a>
            </li>
          </ul>

        </DropdownContent>
      </Dropdown>

    );
  }
}

export default withRouter(DropdownButton);