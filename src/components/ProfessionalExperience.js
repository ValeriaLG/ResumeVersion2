import React, { Component } from "react";
import tie from "../images/tie.png";
import "../styles/professional-experience.scss";

const ProfessionalExperience = () => {
    return (
        <div className="professional-container">
            <h1 class="mainName">Professional Experience</h1>
            <div class="bowTieBlock">
                <img src={ tie } class="bowTie"/>
            </div>
            <hr class="mainTitle"/>
            <div class="professionalExpInfo">
            <div class="listing">
                    <h2>Software Developer</h2>
                    <h4>Pragmatics</h4>
                    <hr class="titleLine"/>
                    <ul>
                        <li>Develops dynamic single page applications with ReactJS and tests the applications with Jest</li>
                        <li>Utilizes AWS services through the AWS CLI and the AWS dashboard</li>
                        <li>Drafts webpage designs by creating wireframes on Adobe Xd</li>
                    </ul>
                </div>

                <div class="listing">
                    <h2>Communications & Web Development Intern</h2>
                    <h4>American Association for the Advancement of Science</h4>
                    <hr class="titleLine"/>
                    <ul>
                        <li>Constructed monthly newsletter emails and remedied any CSS styling problems on Marketo</li>
                        <li>Updated web pages and wrote blogs on the Drupal content management system</li>
                        <li>Provided expertise on responsive web design for web pages</li>
                    </ul>
                </div>

                <div class="listing">
                    <h2>Creative Technologist Intern</h2>
                    <h4>Northrop Grumman</h4>
                    <hr class="titleLine"/>
                    <ul>
                        <li>Created graphical logos, event fliers, and infographics</li>
                        <li>Designed newsletter templates</li>
                        <li>Constructed and maintained many public facing webpages on a web content management system</li>
                        <li>Provided technical and design expertise on matters relating to web development</li>
                    </ul>
                </div>


                <div class="listing">
                    <h2>Undergraduate Teaching Assistant</h2>
                    <h4>George Mason University</h4>
                    <hr class="titleLine"/>
                    <ul>
                        <li>Assisted students with understanding concepts on their Python programming assignments for CS Principles of Computing</li>
                    </ul>

                </div>

                <div class="listing">
                    <h2>Student Activities Office Assistant</h2>
                    <h4>Northern Virginia Community College</h4>
                    <hr class="titleLine"/>
                    <ul>
                        <li>Managed and maintained the campus bulletin boards by approving the fliers for them</li>
                        <li>Informed inquiring students of campus activities and student life</li>
                        <li>Designed fliers advertising campus events and activities</li>
                        <li>Composed PowerPoint slideshow presentations to showcase campus events</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default ProfessionalExperience;