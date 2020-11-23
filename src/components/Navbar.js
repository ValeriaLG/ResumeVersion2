import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/logoImage.png";
import "../styles/navbar.css";


const Navbar = () => {
    return (
        <div class="navigation">
            <span class="logo"><img src={ logoImage } class="logoImage"/></span>
            <a id="homepage" href="index.html">Homepage</a>

            <div class="hoverDrop">
                <span class="moreAbout"><a id="moreAbout" href="#">More About Me</a></span>

            <div class="drop">
                <Link to="/education">Education</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/professional-experience">Professional Experience</Link>
                <Link to="/volunteer-experience">Volunteer Experience</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div>

            </div>
        </div>

    )
};

export default Navbar;