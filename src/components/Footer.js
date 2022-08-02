import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-container">

            <div className = "left">
                <div className = "location">
                    <FaHome className = "leftIcons" size = { 20 } style = {{ color: "#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>825 Sweetbay Drive.</p>
                        <p>Sunnyvale, CA</p>
                    </div>
                </div>
                
                <div className = "phone">
                    <FaPhone className = "leftIcons" size = { 20 } style = {{ color: "#fff", marginRight: "2rem" }}/>
                    <div> 
                        <h4>1-408-431-4104</h4>
                    </div>
                </div>

                <div className = "email">
                    <FaMailBulk className = "leftIcons" size = { 20 } style = {{ color: "#fff", marginRight: "2rem" }}/>
                    <div> 
                        <h4>buddharajusahil@gmail.com</h4>
                    </div>
                    
                </div>
            </div>

            <div className = "right">
                <h4>About me</h4>
                <p></p>
                <div className = "social">
                    <FaLinkedin size = { 20 } style = {{ color: "#fff", marginRight: "2rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer