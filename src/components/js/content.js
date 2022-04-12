import React from "react";
import Items from "./items";
import '../styles/content.css'
import spaceimg from "../media/space.jpg";
import milky from "../media/milkyway.jpg";
import {Link} from 'react-router-dom';

const Content = () => (
        <div className="content">
            <h1>This website is being built with React!</h1>
            <div className="content_container">
                <div className="content_wrapper">
                    <ul className="content_items">
                    {/* <Link to ={spaceimg}> */}
                    <a href="https://www.linkedin.com/company/ajh-web-development">
                        <Items 
                        src={spaceimg}
                        text="Personal Logo"
                        label="universe"
                        path= "/home"/>
                    </a>
                    {/* </Link> */}
                    {/* <Link to ={milky}>
                        <Items
                        src={milky}
                        text="This is a picture of the milkyway"
                        label="universe"
                        path= "/home" />                      
                     </Link>                              */}
                    </ul>
                </div>

            </div>
        </div>
);
export default Content;