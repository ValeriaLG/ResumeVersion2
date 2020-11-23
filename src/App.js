import logo from './logo.svg';
import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import './styles/main.scss';
import Education from './components/Education';
import ProfessionalExperience from './components/ProfessionalExperience';
import VolunteerExperience from './components/VolunteerExperience';
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
      <div>

        <HashRouter basename="/">
          <Navbar />
          <Route exact path="/" component={ Main } />
          <Route path="/skills" component={ Skills } />
          <Route path="/education" component={ Education } />
          <Route path="/professional-experience" component={ ProfessionalExperience } />
          <Route path="/volunteer-experience" component={ VolunteerExperience } />
          <Route path="/portfolio" component={ Portfolio } />
        </HashRouter>
      </div>
  );
}

export default App;
