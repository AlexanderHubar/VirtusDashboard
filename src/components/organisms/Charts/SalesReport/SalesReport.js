import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Col} from 'react-bootstrap/lib';
import './SalesReport.css'

//component
import Select from '../../../atoms/Select/Select'

//config
import reportChart from "../../../../config/salesReportChart.config";

class SalesReport extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      dataReport : []
    }
  }

  componentWillMount(){
    fetch('/api/user/report/year', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          dataReport: res
        });
        let chart = this.refs.reportChart.getChart();
        chart.series[0].setData(this.state.dataReport, true);
      })
  }

  onChange = (e) => {
    if (e.target.value === "Year") {
      fetch('/api/user/report/year', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataReport: res
          });
          let chart = this.refs.reportChart.getChart();
          chart.series[0].setData(this.state.dataReport, true);

        })
    } else if (e.target.value === "Month") {
      fetch('/api/user/report/month', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataReport: res
          });
          let chart = this.refs.reportChart.getChart();
          chart.series[0].setData(this.state.dataReport, true);
          chart.yAxis[0].update({
            max: 14,
            min: 0,
            tickInterval: 3,
          });
        })
    } else if (e.target.value === "Week") {
      fetch('/api/user/report/week', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataReport: res
          });
          let chart = this.refs.reportChart.getChart();
          chart.series[0].setData(this.state.dataReport, true);
          chart.yAxis[0].update({
            max: 10,
            min: 0,
            tickInterval: 2,
          });
        })
    }
  };

  render(){
    const reportSelect = {
      list: ["Year", "Month", "Week"],
      label: 'Show'
    };

    return(
      <Col className="SalesReport" md={6}>
        <div className="report-header">
            <h2>Sales report</h2>
            <Select onChange={this.onChange} data={reportSelect}/>
        </div>
        <ReactHighcharts config={reportChart} ref='reportChart'>
        </ReactHighcharts>
      </Col>
    )
  }
}

export default SalesReport;