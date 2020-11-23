import React, { Component } from "react";
import handRaised from "../images/hand-raised.png";
import "../styles/volunteer.scss";


const VolunteerExperience = () => {
    return (
        <div className="volunteer-experience-container">
            <h1 class="mainName">Volunteer Experience</h1>
            <div class="handRaisedBlock">
                <img src={ handRaised } class="handRaised"/>
            </div>
            <hr class="mainTitle"/>
            <div class="professionalExpInfo">
                <div class="listing">
                    <h2>VRZone Headset Assistant & LAN room Checkpoint Attendant</h2>
                    <h4>Magfest</h4>
                    <hr class="titleLine"/>
                    <ul><li>Assisted attendees with VR headset set up and coached them on how to operate the controls</li>
                    <li>Checked in/out attendees and their electronic equipment at the LAN room and did bag check</li>
                    </ul>
                </div>
                <div class="listing">
                    <h2>Daycare Counselor</h2>
                    <h4>Highkicks Taekwondo</h4>
                    <hr class="titleLine"/>
                    <ul><li>Supervised children</li>
                    <li>Mentored children in martial arts techniques</li>
                    </ul>
                </div>
                <div class="listing">
                    <h2>After Hours Teen Center Supervisor</h2>
                    <h4>Loudoun County Public Library</h4>
                    <hr class="titleLine"/>
                    <ul><li>Monitored teenagers to ensure safety</li>
                    <li>Set up entertainment for the teenagers before hours</li>
                    <li>Cleaned up the utilities in the library after hours</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default VolunteerExperience;