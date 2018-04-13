import React from 'react';
import FontAwesome from 'react-fontawesome';
import {withRouter} from 'react-router-dom';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import './CardDropdown.css'

class CardDropdown extends React.Component {

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

          <div
            className="account-dropdown__identity account-dropdown__segment card-dropdown-header">
            Move to:
          </div>
          <ul className="dropdown-button__management-links dropdown-button__segment">


            <li className="card-dropdown-button__link">
              <a className="dropdown-button__link__anchor" onClick={this.handleLinkClick}>
                Quened
              </a>
            </li>

            <li className="card-dropdown-button__link">
              <a className="dropdown-button__link__anchor">
                Planning
              </a>
            </li>

            <li className="card-dropdown-button__link">
              <a className="dropdown-button__link__anchor">
                Design
              </a>
            </li>

            <li className="card-dropdown-button__link">
              <a className="dropdown-button__link__anchor">
                Development
              </a>
            </li>

            <li className="card-dropdown-button__link">
              <a className="dropdown-button__link__anchor">
                Testing
              </a>
            </li>

            <li className="card-dropdown-button__link">
              <a className="card-dropdown-button__link__anchor">
                Completed
              </a>
            </li>
          </ul>

        </DropdownContent>
      </Dropdown>

    );
  }
}

export default withRouter(CardDropdown);