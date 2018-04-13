import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './UserTable.css'
import FontAwesome from 'react-fontawesome';


class UserTable extends React.Component {

    userNameBlock = (cell, row) => {
        return (
            <div className="user-name-block" style={{display: 'flex', alignItems: 'center'}}>
                <div className="user-image">
                    <img className="user-photo" src={row.userPhoto} alt={row.userName} />
                    {
                        row.active
                    }
                </div>

                <div className="user-main-info">
                    <p>{row.userName}</p>
                    <span>{row.position}</span>
                </div>
            </div>
        )
    };


    lastActivityBlock = (cell, row) => {
        return (
            <div className="last-activity-block">
                <p className={row.active ? 'online-now' : ''}>
                    <FontAwesome
                        className='task-time-icon'
                        name='clock'
                    />
                    {row.lastActivity}</p>
            </div>
        )
    };

    emailBlock = (cell, row) => {
        return (
            <div className="mail-and-phone-block">
                <p>
                    {row.email}</p>
            </div>
        )
    };

    phoneBlock = (cell, row) => {
        return (
            <div className="mail-and-phone-block">
                <p>
                    {row.phone}</p>
            </div>
        )
    };

    buttonBlock = () => {
        return (
            <button className="button-block">
                <FontAwesome
                    className='dropdown-button-icon'
                    name='ellipsis-v'
                    size='2x'
                />
            </button>
        )
    };


    render() {


        return (
            <div>
                <BootstrapTable
                    bordered={false}
                    headerStyle={{background: '#3a3e52', font: '400 1.2vmax Roboto', paddingLeft: 20}}
                    containerStyle={{background: 'rgb(58, 62, 82)'}}
                    data={this.props.data}
                    pagination>

                    <TableHeaderColumn
                        thStyle={{'border': 'none'}}
                        width='30%'
                        dataField='userName'
                        isKey
                        dataFormat={this.userNameBlock}
                    >Name</TableHeaderColumn>

                    <TableHeaderColumn

                        thStyle={{'border': 'none'}}
                        width='20%'
                        dataField='lastActivity'
                        dataFormat={this.lastActivityBlock}
                    >Last activity</TableHeaderColumn>


                    <TableHeaderColumn
                        thStyle={{'border': 'none'}}
                        width='20%'
                        dataField='email'
                        dataFormat={this.emailBlock}
                    >Mail</TableHeaderColumn>


                    <TableHeaderColumn
                        thStyle={{'border': 'none'}}
                        width='20%'
                        dataField='phone'
                        dataFormat={this.phoneBlock}
                    >Phone</TableHeaderColumn>

                    <TableHeaderColumn
                        thStyle={{'border': 'none'}}
                        width='10%'
                        dataField='button'
                        dataFormat={this.buttonBlock}
                    >

                    </TableHeaderColumn>

                </BootstrapTable>
            </div>
        );

    }

}

export default UserTable;