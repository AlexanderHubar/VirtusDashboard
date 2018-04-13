import React from 'react';
import FontAwesome from 'react-fontawesome';
import {withRouter} from 'react-router-dom';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import './AccountDropdown.css'


class AccountDropdown extends React.Component {

  handleLinkClick = () => {
    this.refs.dropdown.hide();
  };

  handleLogOut = (e) => {

    const {history} = this.props;

    e.preventDefault();
    localStorage.removeItem('userCheck');
    history.push('/authentication')
  };

  render() {
    return (
      <Dropdown className="account-dropdown" ref="dropdown">
        <DropdownTrigger>
          <img
            alt='avatar'
            className="account-dropdown__avatar"
            src={this.props.data.userPhoto}
          />
          <span className="account-dropdown__name">
          <FontAwesome
            className='dropdown-caret'
            name='angle-down'
          />
        </span>
        </DropdownTrigger>
        <DropdownContent>
          <div
            className="account-dropdown__identity account-dropdown__segment">
            Signed in as <strong>{this.props.data.name}</strong>
          </div>

          <ul className="account-dropdown__management-links account-dropdown__segment">

            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" onClick={this.handleLinkClick}>
                Settings
              </a>
            </li>

            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" onClick={this.handleLogOut}>
                Log out
              </a>
            </li>
          </ul>

        </DropdownContent>
      </Dropdown>

    );
  }
}

export default withRouter(AccountDropdown);