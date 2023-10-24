import React, { useState, useRef, useEffect } from 'react'
import '../style.css'
import img1 from '../1.png'

const Carousel = ({ i1, i2, i3, i4, i5 }) => {
  const [current, setCurrent] = useState(2);
  const [prev2, setPrev2] = useState(0);
  const [prev, setPrev] = useState(1);
  const [next, setNext] = useState(3);
  const [next2, setNext2] = useState(4);
  const slidesRef = useRef(null);
  let intervalId;

  const handleAutoSlide = () => {
    intervalId = setInterval(() => {
      gotoNext();
    }, 2000);
  };

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const slidesArray = slidesRef.current?.querySelectorAll('.slide');
    if (slidesArray) {
      setSlides(Array.from(slidesArray));
    }
  }, []);

  useEffect(() => {
    handleAutoSlide();

    return () => {
      clearInterval(intervalId);
    };
  }, [slides, current]);

  const gotoPrev = () => {
    clearInterval(intervalId); // Stop auto-sliding during manual control
    const newPrev = current > 0 ? current - 1 : 4;
    gotoNum(newPrev);
  };

  const gotoNext = () => {
    clearInterval(intervalId); // Stop auto-sliding during manual control
    const newNext = current < 4 ? current + 1 : 0;
    gotoNum(newNext);
  };

  const gotoNum = (number) => {
    const newCurrent = number;
    let newPrev2 = newCurrent - 2;
    let newPrev = newCurrent - 1;
    let newNext = newCurrent + 1;
    let newNext2 = newCurrent + 2;

    if (newPrev2 === -2) {
      newPrev2 = 3;
    }

    if (newPrev2 === -1) {
      newPrev2 = 4;
    }

    if (newPrev === -1) {
      newPrev = 4;
    }

    if (newNext === 5) {
      newNext = 0;
    }

    if (newNext2 === 5) {
      newNext2 = 0;
    }

    if (newNext2 === 6) {
      newNext2 = 1;
    }

    for (let index = 0; index < slides.length; index++) {
      slides[index].className = 'slide ';
    }

    slides[newPrev2].className = slides[newPrev2].className.replace(' ', ' prev2');
    slides[newPrev].className = slides[newPrev].className.replace(' ', ' prev');
    slides[newCurrent].className = slides[newCurrent].className.replace(' ', ' active');
    slides[newNext].className = slides[newNext].className.replace(' ', ' next');
    slides[newNext2].className = slides[newNext2].className.replace(' ', ' next2');

    setPrev2(newPrev2);
    setPrev(newPrev);
    setCurrent(newCurrent);
    setNext(newNext);
    setNext2(newNext2);

    // Restart auto-sliding after manual control
    handleAutoSlide();
  };

    
    return (  

        <div id="events" className="main_carousel">
            <div className="slides" ref={slidesRef}>
                <div className="slide prev2">
                    <img src={img1}  className="Glimpse"/>
                </div>
                <div className="slide prev">
                    <img src={img1} className="Glimpse"/>
                </div>
                 <div className="slide active">
                    <img src={img1} className="Glimpse"/>
                </div>
                <div className="slide next">
                    <img src={img1} className="Glimpse"/>
                </div>
                <div className="slide next2">
                    <img src={img1} className="Glimpse"/>
                </div>
            </div>
            <div className="page-indicators">
            {Array.from({ length: '5' }).map((_, index) => (
              <div
                key={index}
                className={`page-indicator ${index === current ? 'active' : ''}`}
                onClick={() => gotoNum(index)}
              />
            ))}
      </div>
        </div>
    );
}
 
export default Carousel;