import React from "react";
import {Button} from './Button'
import '../styles/App.css'
import '../styles/media.css'
import video from '../media/vid2.mp4'
import { Link } from 'react-router-dom';
import Content from "./content";

function Media2() {
    return (
        <div className='hero-container'>
            <video src={video} type="video/mp4" autoPlay loop muted></video>
            <div className="box-one">
            <Link to='/About' className='btn-mobile'>
                <Button className='btns' buttonStyles='btn--outline' buttonSize='btn--large'> About Us          
                </Button>
            </Link>
            </div>
       </div>
    )
}

export default Media2;