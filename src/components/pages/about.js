import React from "react";
import Media2 from '../js/media2';
import '../styles/about.css';


const About = () => {
    return (
        <div>
            <Media2 />
            <div className="about-container-1">
            <h2>This page will include: </h2>
            <li>Profile</li>
            <li>Interests</li>
            <li>Goals</li>
            </div>
        </div>
    )
}

export default About;