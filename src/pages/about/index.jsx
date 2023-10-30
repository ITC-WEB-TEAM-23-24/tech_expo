import React from "react";
import logo from './purple-color_website.webp'
import "./about.css"
import sponsors from "./sponsors.jpg"

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
                    "Tech R&D Expo is a two-day event scheduled for November 4th and 5th, 2023, at the IIT Bombay campus. The aim is to highlight and encourage technical innovation and projects within our institute, providing a platform for the presentation of notable technical projects to a diverse audience, including corporate visitors, alumni, professors, and fellow students. The event encompasses various aspects of technical activities, including the exhibition of Tech Teams, Department Projects, Institute Technical Summer Projects (ITSP), tech startups, and individual or group self-projects. In addition to the exhibition, the event includes games, student-made interactive zones, workshops, and competitions spread over the two days.

"
                </div>
            </div>
            <div className="sponsors" data-aos='fade-up' data-aos-delay='200' data-aos-duration='1500'>
                <img src={sponsors} alt="sponsors" />
            </div>

            
        </div>
        
    )
}