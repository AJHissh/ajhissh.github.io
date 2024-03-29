import React from "react";
import {Button} from './Button-global'
import '../styles/App.css'
import '../styles/media.css'
import video from '../media/vid.mp4'
import { Link } from 'react-router-dom';

function HomeMedia() {
    return (
        <div className='hero-container'>
            <video src={video} type="video/mp4" autoPlay loop muted></video>
            <div className="box-one">
            <Link to='/contact' className='btn-mobile'>
                <Button className='btns' buttonStyles='btn--outline' buttonSize='btn--large'> Contact Me            
                </Button>
            </Link>
            <Link to='/About' className='btn-mobile'>
                <Button className='btns' buttonStyles='btn--outline' buttonSize='btn--large'> Learn more            
                </Button>
            </Link>
            </div>
       </div>
    )
}

export default HomeMedia;