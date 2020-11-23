import React, { Component } from "react";
import "../styles/portfolio.scss";
import blackboard from "../images/blackboard.jpg";
import arizonastamp from "../images/Arizonastamp.png";
import animalLogos from "../images/animallogos.png";
import centuryOfType from "../images/ACenturyofTypeDesignposter.jpg";
import martialArtsSmol from "../images/martialArtsSmol.jpg";
import conventionsPreview from "../images/conventionsPreview.png";
import conventionsPreview2 from "../images/conventionsPreview2.png";
import picturehead_smaller_square from "../images/picturehead_smaller_square.png";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h1 class="mainName">Portfolio</h1>

            <div class="blackboardBlock">
                 <img src={ blackboard } class="blackboard"/>
            </div>

            <hr class="mainTitle"/>

            <div class="portfolio">

                <div class="listing">
                    <a href={ arizonastamp } target="_blank" title="Click to view full picture">
                        <img src={ arizonastamp } class="modalPics"/>
                    </a>
                </div>

                <div class="listing">
                    <a href={ animalLogos } target="_blank" title="Click to view full picture">
                        <img src={ animalLogos } class="modalPics widthMore"/>
                    </a>
                </div>


                <div class="listing">

                    <a href={ centuryOfType } target="_blank" title="Click to view full picture">
                        <img src={ centuryOfType } class="modalPics widthMore"/>
                    </a>
                </div>


                <div class="listing">
                    <a href={ martialArtsSmol } target="_blank" title="Click to view full picture">
                        <img src={ martialArtsSmol } class="modalPics widthMore"/>
                    </a>
                </div>

                <div class="listing">
                    <a href="http://mason.gmu.edu/~vgreen2/IT331/" target="_blank" title="Click to view the remote website">
                        <img src={ conventionsPreview } class="modalPics doubleStacked"/>
                        <img src={ conventionsPreview2 } class="modalPics doubleStacked"/>
                    </a>
                </div>

                <div class="listing">
                    <a href="http://mason.gmu.edu/~vgreen2/ValeriaPortfolioReal/" target="_blank" title="Click to view the remote website">
                        <img src={ picturehead_smaller_square } class="modalPics"/>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Portfolio;