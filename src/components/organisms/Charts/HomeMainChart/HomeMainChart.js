import React from 'react';
import {Col} from 'react-bootstrap/lib';
import './HomeMainChart.css'

//components
import HomeRaportChart from "../HomeRaportChart/HomeRaportChart";

class HomeMainChart extends React.Component {
  render(){
    return(
      <Col className="HomeMainChart" md={9}>
        <HomeRaportChart/>
      </Col>
    )
  }
}

export default HomeMainChart;