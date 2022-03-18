import React from "react";
import { Link } from "react-router-dom";
import spaceimg from "./space.jpg";

function Items() {
    return (
        <>
            <li className="content_item">
                    <figure className="content_item_pic-wrap">
                        <img src={spaceimg} alt="cont" className="content_item_img"/>
                    </figure>  
                    <div className="content_item_info">
                        <h5 className="content_item_text"> This image is a development test img as is this whole site </h5>
                    </div>          
            </li>
        </>
    )
}

export default Items;