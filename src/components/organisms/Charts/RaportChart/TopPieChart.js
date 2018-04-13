import React from 'react';
import ReactHighcharts from 'react-highcharts';
import './TopPieChart.css'


//config
import topPieChart from "../../../../config/topPieChart.config";


class TopPieChart extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      viewsCount: 0,
      viewsVisitors: 0,
      viewsImpressions: 0
    }
  }

  componentWillMount() {

    fetch('/api/user/raport/pie/week', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())

      .then(res => {
        this.setState({
          viewsCount: res[0].num
        });
        this.setState({
          viewsVisitors: res[1].num
        });
        this.setState({
          viewsImpressions: res[2].num
        });
        let chart = this.refs.topPieChart.getChart();
        chart.series[0].setData(res[0].data);
        chart.setTitle({
          text: res[0].percent + '%'
        });

        let chart2 = this.refs.topPieChart2.getChart();
        chart2.series[0].setData(res[1].data);
        chart2.setTitle({
          text: res[1].percent + '%'
        });

        let chart3 = this.refs.topPieChart3.getChart();
        chart3.series[0].setData(res[2].data);
        chart3.setTitle({
          text: res[2].percent + '%'
        });

      })
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.selectChange === 'Week') {
      fetch('/api/user/raport/pie/week', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())

        .then(res => {
          this.setState({
            viewsCount: res[0].num
          });
          this.setState({
            viewsVisitors: res[1].num
          });
          this.setState({
            viewsImpressions: res[2].num
          });
          let chart = this.refs.topPieChart.getChart();
          chart.series[0].setData(res[0].data);
          chart.setTitle({
            text: res[0].percent + '%'
          });

          let chart2 = this.refs.topPieChart2.getChart();
          chart2.series[0].setData(res[1].data);
          chart2.setTitle({
            text: res[1].percent + '%'
          });

          let chart3 = this.refs.topPieChart3.getChart();
          chart3.series[0].setData(res[2].data);
          chart3.setTitle({
            text: res[2].percent + '%'
          });

        })
    }
    if (nextProps.selectChange === 'Month') {
      fetch('/api/user/raport/pie/month', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())

        .then(res => {
          this.setState({
            viewsCount: res[0].num
          });
          this.setState({
            viewsVisitors: res[1].num
          });
          this.setState({
            viewsImpressions: res[2].num
          });
          let chart = this.refs.topPieChart.getChart();
          chart.series[0].setData(res[0].data);
          chart.setTitle({
            text: res[0].percent + '%'
          });

          let chart2 = this.refs.topPieChart2.getChart();
          chart2.series[0].setData(res[1].data);
          chart2.setTitle({
            text: res[1].percent + '%'
          });

          let chart3 = this.refs.topPieChart3.getChart();
          chart3.series[0].setData(res[2].data);
          chart3.setTitle({
            text: res[2].percent + '%'
          });

        })
    }
    if (nextProps.selectChange === 'Year') {
      fetch('/api/user/raport/pie/year', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())

        .then(res => {
          this.setState({
            viewsCount: res[0].num
          });
          this.setState({
            viewsVisitors: res[1].num
          });
          this.setState({
            viewsImpressions: res[2].num
          });
          let chart = this.refs.topPieChart.getChart();
          chart.series[0].setData(res[0].data);
          chart.setTitle({
            text: res[0].percent + '%'
          });

          let chart2 = this.refs.topPieChart2.getChart();
          chart2.series[0].setData(res[1].data);
          chart2.setTitle({
            text: res[1].percent + '%'
          });

          let chart3 = this.refs.topPieChart3.getChart();
          chart3.series[0].setData(res[2].data);
          chart3.setTitle({
            text: res[2].percent + '%'
          });

        })
    }
  }


  render() {

    return (

      <div className="TopPieChart">

        <div className="pie-chart-item">
          <ReactHighcharts config={topPieChart} ref='topPieChart'>
          </ReactHighcharts>
          <div className="pie-chart-info">
            <p>{this.state.viewsCount}</p>
            <span>Views</span>
          </div>
        </div>
        <div className="pie-chart-item">
          <ReactHighcharts config={topPieChart} ref='topPieChart2'>
          </ReactHighcharts>
          <div className="pie-chart-info">
            <p>{this.state.viewsVisitors}</p>
            <span>Visitors</span>
          </div>
        </div>
        <div className="pie-chart-item">
          <ReactHighcharts config={topPieChart} ref='topPieChart3'>
          </ReactHighcharts>
          <div className="pie-chart-info">
            <p>{this.state.viewsImpressions}</p>
            <span>Impressions</span>
          </div>
        </div>


      </div>
    )
  }

}

export default TopPieChart;