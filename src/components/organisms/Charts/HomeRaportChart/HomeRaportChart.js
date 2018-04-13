import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Col} from 'react-bootstrap/lib';
import '../RaportChart/RaportChart.css'


//config
import raportChart from "../../../../config/raportChart.config";
import HomeTopPieChart from "../HomeRaportChart/HomeTopPieChart";

class HomeRaportChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataRaport: [],
      showBy: ''
    }
  }

  componentWillMount() {
    fetch('/api/user/raport', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          dataRaport: res.slice(0, 7)
        });
        let chart = this.refs.raportChart.getChart();
        chart.series[0].setData(this.state.dataRaport, true);
        chart.update({
          chart:{
            backgroundColor: '#2f3242'
          },
          xAxis:{
            labels:{
              y: -95
            }
          }
        })
      })
  }

  render() {

    return (
      <Col className="RaportChart">
        <div className="raport-header raport-header-home">
          <HomeTopPieChart selectChange={this.state.showBy}/>
        </div>
        <ReactHighcharts config={raportChart} ref='raportChart'>
        </ReactHighcharts>
      </Col>
    )
  }
}

export default HomeRaportChart;