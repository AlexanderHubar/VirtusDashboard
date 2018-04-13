import React from 'react';
import FontAwesome from 'react-fontawesome';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './RaportTable.css'


class RaportTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'Campaing',
      defaultSortOrder: 'ask'
    };

    this.state = {
      table: []
    };

    fetch("/api/user/raport/table", {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          table: res
        });

      })
  }

  getCaret = (direction) => {
    if (direction === 'asc') {
      return (
        <FontAwesome
          className='dropdown-caret dropdown-caret-table'
          name='angle-down'
        />
      );
    }
    if (direction === 'desc') {
      return (
        <FontAwesome
          className='dropdown-caret dropdown-caret-table'
          name='angle-up'
        />
      );
    }
    return (
      <FontAwesome
        className='dropdown-caret dropdown-caret-table'
        name='angle-down'
      />
    );
  };

  status = (cell, row) => {
    return <p className={'table-status ' + ((row.Status === 'Active')?'table-status-active': '')}>{row.Status}</p>
  };

  render() {
    return (
      <BootstrapTable
        headerStyle={{color: '#9ca1b2', 'background': '#3a3e52', 'font': '400 14px Montserrat'}}
        bordered={false}
        data={this.state.table}
        options={this.options}
      >
        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          width='24%'
          tdStyle={{'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '16px Montserrat', 'padding': '20px 25px'}}
          thStyle={{'border': 'none', 'padding': '10px 25px'}}
          dataField='Campaing'
          isKey
          dataSort
        >Campaing</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='Time'
          dataSort
        >Time</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='Views'
          dataSort
        >Views</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='Visitors'
          dataSort
        >Visitors</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='CTR'
          dataSort
        >CTR</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='CPC'
          dataSort
        >CPC</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='CPV'
          dataSort
        >CPV</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='CPM'
          dataSort
        >CPM</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          dataFormat={ this.status }
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='Status'
          dataSort
        >Status</TableHeaderColumn>


      </BootstrapTable>
    );
  }
}

export default RaportTable;