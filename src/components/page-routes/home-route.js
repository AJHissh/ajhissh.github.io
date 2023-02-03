import React from 'react';
import '../styles/App.css'
import HomeSolar from '../js/home-solar';
import HomeMedia from '../js/home-media';
import Navbar from '../js/Navbar-global';


function HomePage() {
    return (
        <>
        <Navbar />
        <HomeMedia />
        <HomeSolar />
        </>
    )
}


export default HomePage;