import React from 'react'
import './style.css'
import i11 from "../../assets/stalls/techteam.jpeg"
import i12 from "../../assets/stalls/techteam2.jpeg"
import i13 from "../../assets/stalls/techteam3.jpeg"
import i14 from "../../assets/stalls/techteam.jpeg"
import i21 from "../../assets/stalls/techteam.jpeg"
import i22 from "../../assets/stalls/techteam2.jpeg"
import i23 from "../../assets/stalls/techteam3.jpeg"
import i24 from "../../assets/stalls/techteam.jpeg"
import i31 from "../../assets/stalls/techteam.jpeg"
import i32 from "../../assets/stalls/techteam2.jpeg"
import i33 from "../../assets/stalls/techteam3.jpeg"
import i34 from "../../assets/stalls/techteam.jpeg"
import i41 from "../../assets/stalls/techteam.jpeg"
import i42 from "../../assets/stalls/techteam2.jpeg"
import i43 from "../../assets/stalls/techteam3.jpeg"
import i44 from "../../assets/stalls/techteam.jpeg"
import i51 from "../../assets/stalls/techteam.jpeg"
import i52 from "../../assets/stalls/techteam2.jpeg"
import i53 from "../../assets/stalls/techteam3.jpeg"
import i54 from "../../assets/stalls/techteam.jpeg"
import i61 from "../../assets/stalls/techteam.jpeg"
import i62 from "../../assets/stalls/techteam2.jpeg"
import i63 from "../../assets/stalls/techteam3.jpeg"
import i64 from "../../assets/stalls/techteam.jpeg"
import i71 from "../../assets/stalls/techteam.jpeg"
import i72 from "../../assets/stalls/techteam2.jpeg"
import i73 from "../../assets/stalls/techteam3.jpeg"
import i74 from "../../assets/stalls/techteam.jpeg"
import i81 from "../../assets/stalls/techteam.jpeg"
import i82 from "../../assets/stalls/techteam2.jpeg"
import i83 from "../../assets/stalls/techteam3.jpeg"
import i84 from "../../assets/stalls/techteam.jpeg"
import i91 from "../../assets/stalls/techteam.jpeg"
import i92 from "../../assets/stalls/techteam2.jpeg"
import i93 from "../../assets/stalls/techteam3.jpeg"
import i94 from "../../assets/stalls/techteam.jpeg"

import 'aos/dist/aos.css';
import Skewlayout from '../../components/skewlayout'

function Stalls() {
  const data  = [
    {tittle: 'Tech Teams', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i11, img2: i12, img3: i13, img4: i14},
    {tittle: 'Tech Communities', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i21, img2: i22, img3: i23, img4: i24},
    {tittle: 'Tech Clubs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i31, img2: i32, img3: i33, img4: i34},
    {tittle: 'ITSP Projects', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i41, img2: i42, img3: i43, img4: i44},
    {tittle: 'Centre of Excellence Projects', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i51, img2: i52, img3: i53, img4: i54},
    {tittle: 'Insti Startup', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i61, img2: i62, img3: i63, img4: i64},
    {tittle: 'Department & Prof Projects', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i71, img2: i72, img3: i73, img4: i74},
    {tittle: 'Food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i81, img2: i82, img3: i83, img4: i84},
    {tittle: 'Sponsors & Companies', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', img1: i91, img2: i92, img3: i93, img4: i94}
  ]
  return (
      <div id='stalls'>
        <h1 data-aos="fade-up" data-aos-duration="1000">STALLS</h1>
        <ul>
          {data.map((item, index) => (
            <li data-aos={(index%2==0) ? "fade-left" : "fade-right" } data-aos-duration="1000" data-aos-delay="300" key={index}> 
              <div className='heading'>{item.tittle}</div> 
              <div className='description'>{item.description}</div>
              <img src={item.img1} alt="" className='img1'/>
              <img src={item.img2} alt="" className='img2'/>
              <img src={item.img3} alt="" className='img3'/>
              <img src={item.img3} alt="" className='img4'/>
            </li>
          ))}
        
      </ul>
    </div>
  )
}

export default Stalls