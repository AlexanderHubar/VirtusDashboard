import React from 'react';
import {Col} from 'react-bootstrap/lib';
import Calendar from 'react-calendar';
import './HomeCalendar.css'

class HomeCalendar extends React.Component {

  state = {
    date: new Date(),
  };

  onChange = date => this.setState({date});

  render() {
    return (
      <Col className="Calendar" md={3}>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          locale="en-EN"
        />
      </Col>
    )
  }
}

export default HomeCalendar;