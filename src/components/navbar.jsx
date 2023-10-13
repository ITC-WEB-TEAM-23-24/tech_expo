import React, { useState, useEffect } from 'react';
import './style.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
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

  return (
    <div className={`navbar ${showNavbar ? 'nav-show' : 'nav-hide'}`}>
      <ul>
        <li>D</li>
        <li>E</li>
        <li>E</li>
        <li>P</li>
        <li>A</li>
        <li>K</li>
      </ul>
    </div>
  );
};

export default Navbar;
