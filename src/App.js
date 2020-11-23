import logo from './logo.svg';
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import './styles/main.css';
import Education from './components/Education';
import ProfessionalExperience from './components/ProfessionalExperience';
import VolunteerExperience from './components/VolunteerExperience';
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

class App extends Component {
  render() {
    return (
          <HashRouter basename="/">
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={ Main } />
                <Route exact path="/skills" component={ Skills } />
                <Route exact path="/education" component={ Education } />
                <Route exact path="/professional-experience" component={ ProfessionalExperience } />
                <Route exact path="/volunteer-experience" component={ VolunteerExperience } />
                <Route exact path="/portfolio" component={ Portfolio } />
              </Switch>
            </div>
          </HashRouter>
    );
  }
}

export default App;
