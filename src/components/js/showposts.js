import React from "react";


function ShowPosts(props) {
    return (
        <>          
        <li className="content_item">
                <h5 className="content_item_text">{props.text}</h5>
        </li>
        </>
    )
}

export default ShowPosts;