import "./MainImgStyles.css";

import React from 'react'

import IntroImg from "../assets/mainimage.png";
import { Link } from "react-router-dom";

const MainImg = () => {
  return (
    <div className = "main">
        <div className = "mask">
            <img className = "intro-img" src = { IntroImg } alt = "IntroImg"/>
        </div>

        <div className = "content">
            <p>Hi, I'm Sahil.</p>
            <h1>Software Engineer.</h1>
            <div>
                <Link to = "/projects" className = "btn">Projects</Link>
                <Link to = "/contact" className = "btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default MainImg