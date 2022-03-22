import React from "react";


function Items(props) {
    return (
        <>          
        <li className="content_item">
            <figure className="content_item_link">
                <img src={props.src} alt="cont" className="content_item_img" />
            </figure>           
            <div className="content_item_info">
                <h5 className="content_item_text">{props.text}</h5>
            </div>      
        </li>
        </>
    )
}

export default Items;