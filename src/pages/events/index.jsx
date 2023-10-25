import React from 'react'
import img1 from './dronesflying.webp'
import img2 from './hpgaming.webp'
import img3 from './lasermaze.webp'
import img4 from './skygazing.webp'
import img5 from './vrgaming.webp'
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
              i2={img2}
              i3={img3}
              i4={img4}
              i5={img5}
            />
    </div>
  )
}
export default Eventss  