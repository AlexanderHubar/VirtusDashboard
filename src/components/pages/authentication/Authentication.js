import React from 'react';
import './Authentication.css';

//components
import Registration from "../../organisms/Login&Registration/Registration";
import Login from '../../organisms/Login&Registration/Login';
import Logo from '../../../assets/img/logo.png';


class Authentication extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      tab: 'logTab'
    }
  }

  componentWillMount(){
    const { history } = this.props;
    if(localStorage.getItem('userCheck') ==='user exist' ){
      history.push('/')
    }
  }

  tabChange = (value) => {
    this.setState({
      tab: value
    })
  };

  render() {
    return (

      <div className="Authentication">
        <div className="auth-wrapp">
          <div className='auth-box'>
            <img className='logo' src={Logo} alt="Logo"/>
            <div className='auth-tab'>
              <a
                className={this.state.tab === 'regTab'
                  ? 'ActiveTab RegisterLink'
                  : 'RegisterLink'}
                onClick={() => this.tabChange('regTab')}>Register
              </a>

              <a
                className={this.state.tab === 'logTab'
                  ? 'ActiveTab LoginLink'
                  : 'LoginLink'}
                onClick={() => this.tabChange('logTab')}>Login
              </a>

            </div>
          </div>

          <div className="auth">
            {this.state.tab === 'logTab'
              ? <Login/>
              : <Registration/>
            }
          </div>

        </div>
      </div>
    );
  }
}


export default Authentication;