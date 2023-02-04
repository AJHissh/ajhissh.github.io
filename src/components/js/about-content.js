import React from "react";
import Items from "./items";
import '../styles/content.css'
import spaceimg from "../media/space.jpg";
import milky from "../media/milkyway.jpg";
import {Link} from 'react-router-dom';

const AboutContent = () => (
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
           <footer>
                <p>Author: Andrew James Hisshion</p>
                <p>Email: andrewhisshion@gmail.com</p>
                <p><a href="https://www.digitalocean.com/?refcode=645edf643980&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" /></a></p>
          </footer>
        </div>
);
export default AboutContent;
