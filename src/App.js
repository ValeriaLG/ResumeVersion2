import logo from './logo.svg';
import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
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
              <Route exact path="/" component={ Main } />
              <Route path="/skills" component={ Skills } />
              <Route path="/education" component={ Education } />
              <Route path="/professional-experience" component={ ProfessionalExperience } />
              <Route path="/volunteer-experience" component={ VolunteerExperience } />
              <Route path="/portfolio" component={ Portfolio } />
            </div>
          </HashRouter>
    );
  }
}

export default App;
