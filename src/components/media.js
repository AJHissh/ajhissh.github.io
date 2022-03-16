import React from "react";
import {Button} from './Button'
import '../App.css'
import './media.css'
import video from './vid.mp4'

function Media() {
    return (
        <div className='hero-container'>
            <video src={video} type="video/mp4" autoPlay loop muted></video>
            <div className="box-one">
                <Button className='btns' buttonStyles='btn--outline' buttonSize='btn--large'> Mint            
                </Button>
                <Button className='btns' buttonStyles='btn--outline' buttonSize='btn--large'> Learn more            
                </Button>
            </div>
       </div>
    )
}

export default Media;