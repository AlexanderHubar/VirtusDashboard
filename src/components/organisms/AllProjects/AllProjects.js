import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './AllProjects.css'
import FontAwesome from 'react-fontawesome';

//components
import ProgressBar from "../../molecules/ProgressBar/ProgressBar";


class AllProjects extends React.Component {

  projectTitle = (cell, row) => {
    return (
        <div className="projectTitle-block">
          <p>{row.type}</p>
          <span>{row.company}</span>
        </div>
    )
  };

  value = (cell, row) => {
    return (
      <div className="value-block">
        <p>{row.price}</p>
      </div>
    )
  };

  deadline = (cell, row) => {
    return (
      <div className="deadline-block">
        <p>{row.deadline}</p>
        <span>{row.timeLeft}</span>
      </div>
    )
  };

  timeSpent = (cell, row) => {
    return (
      <div className="timeSpent-block">
        <p>
          {row.timeSpent}</p>
      </div>
    )
  };

  progress = (cell, row) => {
    return (
      <div className="progress-block">
        <p>{row.progress}%</p>
        <ProgressBar data={row.progress}/>
      </div>
    )
  };

  assignedTo = (cell, row) => {
    return (
      <div className="user-name-block" style={{display: 'flex', alignItems: 'center'}}>
        <div className="user-image">
          <img className="user-photo" src={row.userImg} alt={row.userName}/>
        </div>

        <div className="user-main-info">
          <p>{row.type}</p>
          <span>{row.company}</span>
        </div>
      </div>
    )
  };

  buttonBlock = () => {
    return (
      <button className="button-block">
        <FontAwesome
          className='dropdown-dots'
          name='ellipsis-v'
        />
      </button>
    )
  };

  //colored leftBorder
  trClassFormat = (row) => {
    if (row.progress === 100) {
      return 'progress-100'
    }
    if (row.progress === 0) {
      return 'progress-0'
    }
    else {
      return 'progress-mid'
    }
  };

  render() {

    return (
      <BootstrapTable
        trClassName={this.trClassFormat}
        className='project-table'
        bordered={false}
        tableStyle={{padding: '10px'}}
        headerStyle={{color: '#9ea3b4', background: '#2a2c3a', font: '400 16px Montserrat'}}
        containerStyle={{background: '#2a2c3a'}}
        data={this.props.data}
        pagination>

        <TableHeaderColumn
          columnClassName='td-column-string-example'
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          width='15%'
          dataField='id'
          isKey
          dataFormat={this.projectTitle}
        >Project title</TableHeaderColumn>

        <TableHeaderColumn
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          width='10%'
          dataField='value'
          dataFormat={this.value}
        >Value</TableHeaderColumn>


        <TableHeaderColumn
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          width='10%'
          dataField='deadline'
          dataFormat={this.deadline}
        >Deadline</TableHeaderColumn>


        <TableHeaderColumn
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          width='10%'
          dataField='timeSpent'
          dataFormat={this.timeSpent}
        >Time spent</TableHeaderColumn>

        <TableHeaderColumn
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          width='20%'
          dataField='progress'
          dataFormat={this.progress}
        >Progress</TableHeaderColumn>

        <TableHeaderColumn
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          width='10%'
          dataField='status'
          dataFormat={this.status}
        >Status</TableHeaderColumn>


        <TableHeaderColumn
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          width='15%'
          dataField='assignedTo'
          dataFormat={this.assignedTo}
        >Assigned to</TableHeaderColumn>

        <TableHeaderColumn
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          width='5%'
          dataField='buttonBlock'
          dataFormat={this.buttonBlock}
        >

        </TableHeaderColumn>

      </BootstrapTable>
    );

  }

}

export default AllProjects;