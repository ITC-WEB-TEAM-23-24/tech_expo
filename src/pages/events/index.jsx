import React from 'react'
import img1 from './1.png'
import Carousel from './component/corousel'
import './style.css'
import Text_contain from './component/text_contain'

function Eventss() {
  return (
    <div className='events'>
        <h1>Events</h1>
        {/* <div>
          <ul>
            <li>Gaming & Interactive Zone</li>
            <li>VR Gaming</li>
            <li>Lazer Tag</li>
            <li>Sky Gazing</li>
            <li>Drone Flying</li>
            <li>Non-Newtonian Fluid?????</li>
            <li>Car Simualtor</li>
            <li>Plane Simulator</li>
            <li>HP Gaming</li>
            <li>PhotoBoot</li>
          </ul>
        </div> */}
        <Text_contain/>
        <Carousel
              i1={img1}
              i2={img1}
              i3={img1}
              i4={img1}
              i5={img1}
            />
    </div>
  )
}
export default Eventss  