import React from 'react'
import './style.css'
import i1 from '../../assets/land.png'
import { useState, useEffect } from 'react';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='home'>
        <h1  style={{
          transform: `translate(${scrollPosition * -.2}px, ${scrollPosition * -.5}px)`,
        }}>
          <span>T</span>ech & <span>R</span>nd <br /><span>E</span>xpo
        </h1>
        <img src={i1} alt='logo' 
        style={{
          transform: `translate(0, ${scrollPosition *-.5}px) `,
        }}/>
    </div>
  )
}
export default Home