import React from 'react'
import img1 from './1.png'
import Carousel from './component/corousel'
import './style.css'
import Text_contain from './component/text_contain'
import TextAnimation from './component/text2'

function Eventss() {
  const item1 = [
    "Gaming Zone",
    "VR Gaming",
    "Lazer Tag",
    "Everything"
  ];
  const item2 = [
    "Sky Gazing",
    "Drone Flying",
    "Car Simulator",
    "Everything"
  ];
  const item3 = [
    "Plane Simulator",
    "HP Gaming",
    "Photo Booth",
    "Everything"
  ];
  return (
    <div className='events'>
        <h1 data-aos="fade-up" data-aos-duration="1000">Events</h1>
        <div data-aos="fade-up" data-aos-duration="1000">
          <TextAnimation texts={item1}/>
          <TextAnimation texts={item2}/>
          <TextAnimation texts={item3}/>
        </div>
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