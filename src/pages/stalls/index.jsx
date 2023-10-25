import React from 'react'
import './style.css'
import i11 from "./img/tt1.png"
import i12 from "./img/tt2.png"
import i13 from "./img/tt3.png"
import i14 from "./img/tt4.png"
import i21 from "./img/tc1.jpg"
import i22 from "./img/tc2.jpeg"
import i23 from "./img/tc3.png"
import i24 from "./img/tc4.jpeg"
import itsp1 from './img/itsp1.jpeg'
import itsp2 from './img/itsp2.jpeg'
import itsp3 from './img/itsp3.jpeg'
import itsp4 from './img/itsp4.jpeg'
import i31 from "../../assets/stalls/tc1.webp"
import i32 from "../../assets/stalls/tc2.webp"
import i33 from "../../assets/stalls/tc3.webp"
import i34 from "../../assets/stalls/tc4.webp"
import i41 from "../../assets/stalls/techteam.jpeg"
import i42 from "../../assets/stalls/techteam2.jpeg"
import i43 from "../../assets/stalls/techteam3.jpeg"
import i44 from "../../assets/stalls/techteam.jpeg"
import i51 from "../../assets/stalls/techteam.jpeg"
import i52 from "../../assets/stalls/techteam2.jpeg"
import i53 from "../../assets/stalls/techteam3.jpeg"
import i54 from "../../assets/stalls/techteam.jpeg"
import i71 from "../../assets/stalls/techteam.jpeg"
import i72 from "../../assets/stalls/techteam2.jpeg"
import i73 from "../../assets/stalls/techteam3.jpeg"
import i74 from "../../assets/stalls/techteam.jpeg"
import i91 from "../../assets/stalls/techteam.jpeg"
import i92 from "../../assets/stalls/techteam2.jpeg"
import i93 from "../../assets/stalls/techteam3.jpeg"
import i94 from "../../assets/stalls/techteam.jpeg"

import 'aos/dist/aos.css';
import Skewlayout from '../../components/skewlayout'

function Stalls() {
  const data  = [
    {tittle: 'Tech Teams', description: 'Tech Teams are groups of skilled individuals who work on specialized projects or competitions. These teams bring together talents from diverse backgrounds to tackle complex technical challenges. ', img1: i11, img2: i12, img3: i13, img4: i14},
    {tittle: 'Tech Communities', description: 'Technical Communities bring together individuals with shared technical interests or professional goals. These communities provide a supportive environment for networking, knowledge sharing, and collaboration. ', img1: i21, img2: i22, img3: i23, img4: i24},
    {tittle: 'Tech Clubs', description: 'ITC Clubs are student-led organizations that focus on specific technical domains or interdisciplinary areas. These clubs serve as a platform for students to explore their interests, gain practical skills, and collaborate on projects. ', img1: i31, img2: i32, img3: i33, img4: i34},
    {tittle: 'ITSP Projects', description: 'In ITSP Projects, students are involved in diverse technical projects, which encourage innovation, hands-on learning, and interdisciplinary collaboration. They often tackle real-world issues, fostering creativity and problem-solving skills.  ', img1: itsp1, img2: itsp2, img3: itsp3, img4: itsp4},
    {tittle: 'Centre of Excellence Projects', description: 'Centers of Excellence are dynamic research entities, collaborating on industrial projects. Their primary objective is to incubate and support startups within their specialized domains, facilitating the transformation of innovative ideas into businesses.', img1: i51, img2: i52, img3: i53, img4: i54},
    // {tittle: 'Insti Startup', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i61, img2: i62, img3: i63, img4: i64},
    {tittle: 'Department Projects', description: 'Department projects are initiatives undertaken by specific departments, aimed to achieve defined objectives and contribute to the overall progress of the department, varying from research and development to strategic initiatives. ', img1: i71, img2: i72, img3: i73, img4: i74},
    // {tittle: 'Food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i81, img2: i82, img3: i83, img4: i84},
    {tittle: 'Company Stalls', description: 'Company stalls serve as platforms for businesses to showcase their latest innovations and interact with a tech-savvy audience to foster networking, brand visibility, market research and even talent recruitment. ', img1: i91, img2: i92, img3: i93, img4: i94}
  ]
  return (
      <div id='stalls'>
        <h1 data-aos="fade-up" data-aos-duration="1000">EXHIBITIONS</h1>
        <ul>
          {data.map((item, index) => (
            <li data-aos={(index%2==0) ? "fade-left" : "fade-right" } key={index}> 
              <div className='heading'>{item.tittle}</div> 
              <div className='description'>{item.description}</div>
              <img src={item.img1} alt="" className='img1'/>
              <img src={item.img2} alt="" className='img2'/>
              <img src={item.img3} alt="" className='img3'/>
              <img src={item.img4} alt="" className='img4'/>
            </li>
          ))}
        
      </ul>
    </div>
  )
}

export default Stalls