import React from 'react';
import '../styles/App.css'
import AboutMedia from '../js/about-media';
import AboutContent from '../js/about-content';
import Navbar from '../js/Navbar-global';


function AboutPage() {
    return (
        <>
        <Navbar />
        <AboutMedia />
        <AboutContent />
        </>
    )
}


export default AboutPage;