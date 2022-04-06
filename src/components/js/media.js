import React from "react";
import {Button} from './Button'
import '../styles/App.css'
import '../styles/media.css'
import video from '../media/vid.mp4'
import { Link } from 'react-router-dom';

function Media() {
    return (
        <div className='hero-container'>
            <video src={video} type="video/mp4" autoPlay loop muted></video>
            <div className="box-one">
            <Link to='/NFT' className='btn-mobile'>
                <Button className='btns' buttonStyles='btn--outline' buttonSize='btn--large'> Mint            
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

export default Media;