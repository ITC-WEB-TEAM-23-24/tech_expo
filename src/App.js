import React, { useRef } from 'react';
import './App.css';
import Stalls from './pages/stalls';
import Navbar from './components/navbar';
import Home from './pages/homepage';
import { useEffect } from 'react';
import useWindowSize from './components/useWindowSize';

function App() {
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef()
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);
;
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  const skewScrolling = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 100.5;
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    requestAnimationFrame(() => skewScrolling());
  };

  

  return (
    <div ref={app} className="App">
      <div className="background" />
      <Navbar/>
      <Home/>
      
      <div ref={scrollContainer} className="scroll">
        <Stalls/> 
      </div>
    </div>
  );
}

export default App;
