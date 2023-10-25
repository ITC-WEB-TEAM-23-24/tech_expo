import React from "react";
import logo from './purple_expo_logo_shadow.webp'
import "./about.css"

export default function About() {
    return (
        <div id="about" className="about" >
            <div className="title" data-aos='fade-up' data-aos-duration='2000'>
                <h1>ABOUT US</h1>
            </div>
            <div className="bottom">
                <div className="left" data-aos='fade-right' data-aos-delay='100' data-aos-duration='1000'>
                    <img src={logo} alt="expo_logo" />
                </div>
                <div className="right" data-aos='fade-left' data-aos-delay='100' data-aos-duration='1000'>
                    "IIT Bombay’s Tech Expo is a 2-day event which aims to showcase and promote technical activities in the institute.
                    All notable technical projects done in the institute are displayed to corporate visitors, alumni, professors, and fellow students.<br/> The technical activities are also diversified, be it Institute Technical Summer Projects (ITSP), or Technical Teams, or self-projects by individuals or a group of tech enthusiasts. Tech Expo is not limited to project displays alone, it also includes hands-on workshops, competitions, panel discussions, and interactive zones.
                    Our goal is to connect industry to students and research professionals in a way that speaks directly to them and their interests!"
                </div>
            </div>

        </div>
    )
}