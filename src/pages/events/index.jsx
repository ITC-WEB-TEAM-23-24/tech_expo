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
    "Musical Stairs",
    "VR Gaming",
    "Lazer Maze",
    "Everything"
  ];
  const item2 = [
    "Telescope zone",
    "Drone Flying",
    "F1 Simulator",
    "Everything"
  ];
  const item3 = [
    "Crime Scene Investigation",
    "HP Gaming",
    "Shadow light",
    "Everything"
  ];
  return (
    <div className='events'>
        <h1 data-aos="fade-up" data-aos-duration="1000">INTERACTIVE ZONE & GAMES</h1>
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