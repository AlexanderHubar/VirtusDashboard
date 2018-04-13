import React from 'react';
import './Home.css'
import {Grid, Row} from 'react-bootstrap/lib';

//components
import HomeMainChart from "../../organisms/Charts/HomeMainChart/HomeMainChart";
import YourProjects from "../../organisms/YourProjects/YourProjects";
import SalesReport from "../../organisms/Charts/SalesReport/SalesReport";
import Inbox from "../../organisms/Inbox/Inbox";
import Calendar from "../../organisms/HomeCalendar/HomeCalendar";

class Home extends React.Component {
  render(){
    return(
      <div className="Home">
        <Grid fluid>
          <Row>
            <HomeMainChart/>
            <YourProjects/>
          </Row>
          <Row>
            <SalesReport/>
            <Inbox/>
            <Calendar/>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default Home;