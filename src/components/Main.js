import React, { Component }  from "react";
import personalPic from "../images/Me.png";
import handPic from "../images/hand-grip_altered.png";
import "../styles/main.css";
import mailIcon from "../images/mailIcon.png";
import LinkedInIcon from "../images/LinkedInIcon.png";


const Main = () => {

    return (
      <div class="canvas">

        <div class="handing">
          <img src={handPic} class="handPic"/>
        </div>

        <div class="squareInfo">
          <div class="mainGrid">
            <div class="grid1">
              <div class="imageContainer">
                <img src={ personalPic } class="personalPic" />
              </div>
            </div>
            <div class="grid2">
              <h2>I'm Valeria Green</h2>
            </div>
            <div class="grid3">
              <div class="objective">
              <h4>About Me and Objective:</h4>
              <p>I'm a student attending George Mason University who's working towards a Bachelors in Information Technology with a concentration in Web Development and Multimedia and a minor in Web Design.</p>
              <p>I'm interested in ultimately contributing to a company by creating and designing web pages. I aim to bring together design principles and programming skills in my line of work.</p>
            </div>
            </div>
            <div class="grid4">
              <div class="contactInformation">
                <span class="email">
                  <a href="mailto:vgreen2@masonlive.gmu.edu">
                    <img src={ mailIcon } class="mailIcon" />
                  </a>
                  <a href="mailto:valerialesliegreen@gmail.com">
                    <p>valerialesliegreen@gmail.com</p>
                  </a>
                </span>
                <span class="LinkedIn">
                  <a href="www.linkedin.com/in/valeria-green-68b27897" target="_blank">
                    <img src={ LinkedInIcon } class="LinkedInIcon" />
                  </a>
                  <a href="https://www.linkedin.com/in/valeria-green-68b27897" target="_blank">
                    <p>www.linkedin.com/in/valeria-green-68b27897</p>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="squareInfo2">
          <div class="darkerHalf">
          </div>
        </div>

      </div>


    );

}

export default Main;