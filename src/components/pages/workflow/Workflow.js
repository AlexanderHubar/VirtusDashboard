import React from 'react';
import './Workflow.css'

//components
import DNDWrap from "../../organisms/DND/DNDWrap";
import AllProjects from "../../organisms/AllProjects/AllProjects";
import Select from "../../atoms/Select/Select";

class Workflow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tab: 'workflowAllProjectTab',
      showedProject: []
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
          showedProject: res
        });

      })
  }

  onSelectChange = (e) => {
    let selectCompany = e.target.value;
    fetch('/api/user/projects', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })

      .then(res => res.json())
      .then(res => {
        if(selectCompany === "Microsoft"){
          this.setState({
            showedProject: res.filter((e)=>{
              return e.company === "Microsoft"
            })
          })
        }
        if(selectCompany === "Google"){
          this.setState({
            showedProject: res.filter((e)=>{
              return e.company === "Google"
            })
          })
        }
        if(selectCompany === "Themeforest"){
          this.setState({
            showedProject: res.filter((e)=>{
              return e.company === "Themeforest"
            })
          })
        }
        if(selectCompany === "Symu.co"){
          this.setState({
            showedProject: res.filter((e)=>{
              return e.company === "Symu.co"
            })
          })
        }
        if(selectCompany === "JCD.pl"){
          this.setState({
            showedProject: res.filter((e)=>{
              return e.company === "JCD.pl"
            })
          })
        }
        if(selectCompany === "Facebook"){
          this.setState({
            showedProject: res.filter((e)=>{
              return e.company === "Facebook"
            })
          })
        }
        if(selectCompany === "All"){
          this.setState({
            showedProject: res
          })
        }

      })

  };

  tabChange = (value) => {
    this.setState({
      tab: value
    })
  };

  render() {

    console.log('Workflow ', this.state.showedProject);

    const workflowProject = {
      list: ["All", "Microsoft", "Google", "Symu.co", "JCD.pl", "Facebook", "Themeforest"],
      label: 'Show projects'
    };

    return (


      <div className="Workflow">
        <div className="workflow-header">
          <div className="workflow-tab">
            <a
              className={this.state.tab === 'workflowDndTab'
                ? 'workflowTab-active'
                : 'workflowTab'}
              onClick={() => this.tabChange('workflowDndTab')}
            >All Projects ({this.state.showedProject.length})</a>
            <a
              className={this.state.tab === 'workflowAllProjectTab'
                ? 'workflowTab-active'
                : 'workflowTab'}
              onClick={() => this.tabChange('workflowAllProjectTab')}
            >Workflow</a>
          </div>
          <Select onChange={this.onSelectChange} data={workflowProject}/>
        </div>

        <div className="workflow-wrap">
          {this.state.tab === 'workflowDndTab'
            ? <DNDWrap data={this.state.showedProject}/>
            : <AllProjects data={this.state.showedProject}/>
          }
        </div>

      </div>
    )
  }
}

export default Workflow;