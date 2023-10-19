import React, { useState, useEffect } from 'react';
import './style.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos-25 > prevScrollPos&&showNavbar){setShowNavbar(false);
      }
      else if(currentScrollPos+25 < prevScrollPos||currentScrollPos===0){setShowNavbar(true);}

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, showNavbar]);

  useEffect(() => {
    if (window.scrollY === 0) {
      const timeoutId = setTimeout(() => {setShowNavbar(true);}, 1500);
      return () => {clearTimeout(timeoutId)};
    } 
  }, []);

  return (
    <div className={`navbar ${showNavbar ? 'nav-show' : 'nav-hide'}`}>
      <ul>
        <li><a href="">D</a></li>
        <li><a href="">E</a></li>
        <li><a href="">E</a></li>
        <li><a href="">P</a></li>
        <li><a href="">A</a></li>
        <li><a href="">K</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
