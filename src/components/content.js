import React from "react";
import Items from "./items";
import './content.css'

const Content = () => (
        <div className="content">
            <h1>Check this out!</h1>
            <div className="content_container">
                <div className="content_wrapper">
                    <ul className="content_items">
                        <Items />                              
                    </ul>
                </div>

            </div>
        </div>
);
export default Content;