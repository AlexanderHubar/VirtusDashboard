import React from 'react'
import './users.css'

import Select from '../../atoms/Select/Select'
import UserTable from '../../organisms/UserTable/UserTable'

import DominicLynton from '../../../assets/img/DominicLynton.png'
import JoleneSlater from '../../../assets/img/JoleneSlater.png'
import LyallRoach from '../../../assets/img/LyallRoach.png'
import MichelleStewart from '../../../assets/img/MichelleStewart.png'

const usersSelect = {
    list: ['Active First', 'No Active', 'All Users'],
    label: 'Sort'
};

const users = [
    {
        userPhoto: DominicLynton,
        userName: 'Dominic Lynton',
        position: 'CEO',
        lastActivity: 'Online now!',
        email: 'DominicLynton@design.com',
        phone: '(000) 111 222 333',
        active: true
    },
    {
        userPhoto: JoleneSlater,
        userName: 'Jolene Slater',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'JoleneSlater@design.com',
        phone: '(000) 111 222 333',
        active: true
    },
    {
        userPhoto: LyallRoach,
        userName: 'Lyall Roach',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'LyallRoach@design.com',
        phone: '(000) 111 222 333',
        active: true
    },
    {
        userPhoto: MichelleStewart,
        userName: 'Michelle Stewart',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'MichelleStewart@design.com',
        phone: '(000) 111 222 333',
        active: true
    },
    {
        userPhoto: DominicLynton,
        userName: 'Dominic Lynton',
        position: 'CEO',
        lastActivity: 'Online now!',
        email: 'DominicLynton@design.com',
        phone: '(000) 111 222 333',
        active: false
    },
    {
        userPhoto: JoleneSlater,
        userName: 'Jolene Slater',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'JoleneSlater@design.com',
        phone: '(000) 111 222 333',
        active: false
    },
    {
        userPhoto: LyallRoach,
        userName: 'Lyall Roach',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'LyallRoach@design.com',
        phone: '(000) 111 222 333',
        active: false
    },
    {
        userPhoto: MichelleStewart,
        userName: 'Michelle Stewart',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'MichelleStewart@design.com',
        phone: '(000) 111 222 333',
        active: false
    },{
        userPhoto: DominicLynton,
        userName: 'Dominic Lynton',
        position: 'CEO',
        lastActivity: 'Online now!',
        email: 'DominicLynton@design.com',
        phone: '(000) 111 222 333',
        active: true
    },
    {
        userPhoto: JoleneSlater,
        userName: 'Jolene Slater',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'JoleneSlater@design.com',
        phone: '(000) 111 222 333',
        active: true
    },
    {
        userPhoto: LyallRoach,
        userName: 'Lyall Roach',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'LyallRoach@design.com',
        phone: '(000) 111 222 333',
        active: true
    },
    {
        userPhoto: MichelleStewart,
        userName: 'Michelle Stewart',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'MichelleStewart@design.com',
        phone: '(000) 111 222 333',
        active: true
    },
    {
        userPhoto: DominicLynton,
        userName: 'Dominic Lynton',
        position: 'CEO',
        lastActivity: 'Online now!',
        email: 'DominicLynton@design.com',
        phone: '(000) 111 222 333',
        active: false
    },
    {
        userPhoto: JoleneSlater,
        userName: 'Jolene Slater',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'JoleneSlater@design.com',
        phone: '(000) 111 222 333',
        active: false
    },
    {
        userPhoto: LyallRoach,
        userName: 'Lyall Roach',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'LyallRoach@design.com',
        phone: '(000) 111 222 333',
        active: false
    },
    {
        userPhoto: MichelleStewart,
        userName: 'Michelle Stewart',
        position: 'UX Designer',
        lastActivity: 'Online now!',
        email: 'MichelleStewart@design.com',
        phone: '(000) 111 222 333',
        active: false
    }
];

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeUsers: []
        }
    }

    componentWillMount() {
        let active = users.filter((user) => {
                return user.active
            }
        );
        this.setState({
            activeUsers: active
        })
    }

    onChange = (e) => {
      if (e.target.value === 'Active First') {
          let active = users.filter((user) => {
                  return user.active
              }
          );
          this.setState({
              activeUsers: active
          })
      }
      else if (e.target.value === 'No Active') {
          let active = users.filter((user) => {
                  return !user.active
              }
          );
          this.setState({
              activeUsers: active
          })
      }
      else {
          this.setState({
              activeUsers: users
          });
      }
    };

    render () {
        return (
            <div className="Users">
                <div className="users-header">
                    <h2>Users <span>({this.state.activeUsers.length})</span></h2>
                    <Select onChange={this.onChange} data={usersSelect}/>
                </div>
                <UserTable data={this.state.activeUsers}/>

            </div>
        )
    }
}

export default Users;