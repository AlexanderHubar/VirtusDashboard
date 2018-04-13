import React from 'react';
import { withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './Login&Registration.css'

//components
import WelcomeButton from '../../atoms/buttons/WelcomeButton/WelcomeButton';

const buttonText = 'Enter';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('username - ', this.state.username, 'pass - ', this.state.password);

    const { history } = this.props;

    const data = {
      login:this.state.username.trim(),
      pass:this.state.password.trim()
    };

    console.log(JSON.stringify(data));

    fetch('/api/user', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('userCheck', res.userCheck);
        localStorage.setItem('userName', this.state.username);
        history.push('/')
      });
  };

  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]:e.target.value
    })
  };

  render() {
    console.log(this.state);

    return(
      <div className="Login">
        <h2 className={'welcome'}>Welcome <span>back!</span></h2>
        <form className='login-form' onSubmit={this.handleSubmit} >

          <div className='welcome-input-wrap'>
            <FontAwesome
              className='welcome-icon'
              name='user'
              size='2x'
            />

            <input
              className='welcome-input'
              placeholder="Username"
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className='welcome-input-wrap'>
            <FontAwesome
              className='welcome-icon'
              name='unlock-alt'
              size='2x'
            />
            <input
              className='welcome-input'
              placeholder="Password"
              type="password"
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <WelcomeButton data={ buttonText }/>
        </form>

      </div>
    )
  }
}

export default withRouter(Login);