import React from "react";
import Items from "./items";
import './content.css'
import spaceimg from "./space.jpg";
import milky from "./milkyway.jpg";
import {Link} from 'react-router-dom';

const Content = () => (
        <div className="content">
            <h1>This website is being built with React!</h1>
            <div className="content_container">
                <div className="content_wrapper">
                    <ul className="content_items">
                    <Link to ={spaceimg}>
                        <Items 
                        src={spaceimg}
                        text="This is test picture of a random vector of space"
                        label="universe"
                        path= "/home" />
                    </Link>
                    <Link to ={milky}>
                        <Items
                        src={milky}
                        text="This is a picture of the milkyway"
                        label="universe"
                        path= "/home" />                      
                     </Link>                             
                    </ul>
                </div>

            </div>
        </div>
);
export default Content;