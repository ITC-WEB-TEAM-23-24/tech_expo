import React from 'react'
import TextCarousel from './text'
import '../style.css'



function Text_contain() {
    const item1 = [
        "Gaming Zone",
        "VR Gaming",
        "Laser Maze",
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
        <div className='textc'>
            <div className='textc_li'>
                We have <span><TextCarousel items={item1} /></span>
            </div>
            <div className='textc_li'>
                We have <span><TextCarousel items={item2} /></span>
            </div>
            <div className='textc_li'>
                We have <span><TextCarousel items={item3} /></span>
            </div>
        </div>
  )
}

export default Text_contain