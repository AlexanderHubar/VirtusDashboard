import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

//components
import PrivateRouter from './PrivateRouter'
import Home from './components/pages/home/Home'
import Workflow from './components/pages/workflow/Workflow'
import Projects from './components/pages/projects/Projects'
import Raport from './components/pages/raport/Raport'
import Users from './components/pages/users/users'
import PageNotFound from './components/pages/pageNotFound/PageNotFound'
import Authentication from './components/pages/authentication/Authentication'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/authentication" component={Authentication}/>

          <PrivateRouter exact path="/" component={Home}/>
          <PrivateRouter exact path="/workflow" component={Workflow}/>
          <PrivateRouter exact path="/projects" component={Projects}/>
          <PrivateRouter exact path="/raport" component={Raport}/>
          <PrivateRouter exact path="/users" component={Users}/>

          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
