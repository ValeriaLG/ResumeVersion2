import React, { Component } from "react";
import Graphs from "./Graphs";
import graduationCap from "../images/graduation-cap.png";
import "../styles/education.css";


const Education = () => {


    return (
        <div className="education-container">
            <h1 class="mainName">Education</h1>
            <div class="gradCapBlock">
                <img src={ graduationCap } class="gradCap"/>
            </div>

            <hr class="mainTitle"/>
            <div class="educationInfo">
                <div class="listing" id="GMU">
                    <h2>George Mason University</h2>
                    <hr class="titleLine"/>
                    <ul>
                        <li>Information Technology B.S.</li>
                    <ul class="sublist">
                        <li>Concentration in Web Development & Multimedia</li>
                        </ul>
                    <li>Minor in Computer Science</li>
                    </ul>
                </div>

                <div class="listing">
                    <h2>Northern Virginia Community College</h2>
                    <hr class="titleLine"/>
                    <ul>
                        <li>Information Technology A.S.</li>
                        <li>General Studies A.S.</li>
                    </ul>
                </div>


                <div class="listing">
                    <h2>Potomac Falls High School</h2>
                    <hr class="titleLine"/>
                    <ul>
                        <li>Advanced Studies Diploma</li>
                    </ul>
                </div>
            </div>
            <div className="chart-js-graphs">
                <Graphs />
            </div>
        </div>

    );
}

export default Education;