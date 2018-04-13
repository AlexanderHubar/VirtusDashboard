import React from 'react';
import {Col} from 'react-bootstrap/lib';
import './YourProjects.css'

//components
import HomeProjectBlock from "../../molecules/ProjectBlock/ProjectBlock";

class YourProjects extends React.Component {

  constructor() {
    super();
    this.state = {
      dataYourProject: []
    }
  }

  componentWillMount() {
    fetch('/api/user/projects', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataYourProject: res.filter((el)=>{
            return el.idd === 'user1'
          })
        });

      })
  }


  render(){
    return(
      <Col className="YourProjects" md={3}>
        <div className="your-project-header">
          <p>Your projects</p>
        </div>
        <HomeProjectBlock data={this.state.dataYourProject.slice(0,4)}/>
      </Col>
    )
  }
}

export default YourProjects;