import React from 'react'
import './style.css'
import { useRef } from 'react';
import i1 from "../../assets/stalls/techteam.jpeg"
import i2 from "../../assets/stalls/techteam2.jpeg"
import i3 from "../../assets/stalls/techteam3.jpeg"

function Stalls() {
  return (
    <div id='stalls'>
        <ul>
            <li>
              <div className='heading'><span>T</span>ech<span>T</span>eams</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
            <li>
              <div className='heading'><span>T</span>ech<span>T</span>ommunities</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
            <li>
              <div className='heading'><span>T</span>ech<span>C</span>lubs</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
            <li>
              <div className='heading'>ITSP<span>P</span>rojects</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
            <li>
              <div className='heading'><span>C</span>entre<span>O</span>f<span>E</span>xcellence<span>P</span>rojects</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
            <li>
              <div className='heading'><span>I</span>nsti<span>S</span>tartup</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
            <li>
              <div className='heading'><span>D</span>epartment&<span>P</span>rof<span>P</span>rojects</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
            <li>
              <div className='heading'><span>F</span>ood</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
            <li>
              <div className='heading'><span>S</span>ponsors&<span>C</span>ompanies</div> 
              <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
              <img src={i1} alt="" className='img1'/>
              <img src={i2} alt="" className='img2'/>
              <img src={i3} alt="" className='img3'/>
            </li>
        </ul>
    </div>
  )
}

export default Stalls