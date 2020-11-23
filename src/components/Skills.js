import React, { Component } from "react";
import gearsCouple from "../images/Interface_gears-couple.png";
import "../styles/skills.scss";


const Skills = () => {
    return (
        <div className="skills-container">
            <h1 class="mainName">Skills</h1>

            <div class="skillsBlock">
                <img src={ gearsCouple } class="mechanics"/>
            </div>
            <hr class="mainTitle"/>
            <br/>
            <div class="skillsInfo">
                <div class="listing">
                    <h1>HTML</h1>
                    <p>I've been programming in HTML for at least a year in the education setting and professional setting. It is what I know the most.</p>
                </div>
                <div class="listing">
                    <h1>CSS</h1>
                    <p>To complement my experience in writing HTML, I had to write CSS. In the professional and educational setting, I had to become equally proficient in it.</p>
                </div>
                <div class="listing">
                    <h1>JQuery</h1>
                    <p class="jquery">I had to make my pages more dynamic during some of my school assignments and as such I had to familiarize myself with JQuery. I've tinkered with JQuery for a semester to make my page come alive.</p>
                </div>
                <div class="listing">
                    <h1>Illustrator</h1>
                    <p class="illustrator">I've made many graphics and tickered with them in this program in the professional and educational setting. I've made infographics, logos, and graphics for the web on it.</p>

                </div>
                <div class="listing more">
                    <p><a href="https://www.linkedin.com/in/valeria-green-68b27897" target="_blank">And more that you can find here!</a></p>
                </div>
            </div>
        </div>

    )
}


export default Skills;