import React from "react";
import Items from "./items";
import './content.css'
import spaceimg from "./space.jpg";
import milky from "./milkyway.jpg";

const Content = () => (
        <div className="content">
            <h1>Check this out!</h1>
            <div className="content_container">
                <div className="content_wrapper">
                    <ul className="content_items">
                        <Items 
                        src={spaceimg}
                        text="This is test picture of a random vector in our universe"
                        label="universe"
                        path= "/home" />
                        <Items
                        src={milky}
                        text="This is a picture of the milkyway"
                        label="universe"
                        path= "/home" />                             
                    </ul>
                </div>

            </div>
        </div>
);
export default Content;