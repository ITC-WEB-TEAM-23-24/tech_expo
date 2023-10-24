import React, { useState, useEffect } from "react";
import "./style.css";
import n1 from "../assets/navbar/home.jpg";
import n2 from "../assets/navbar/sponsor.png";
import n3 from "../assets/navbar/events.png";
import n4 from "../assets/navbar/compi.png";
import n5 from "../assets/navbar/stalls.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos - 25 > prevScrollPos && showNavbar) {
        setShowNavbar(false);
      } else if (
        currentScrollPos + 25 < prevScrollPos ||
        currentScrollPos === 0
      ) {
        setShowNavbar(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, showNavbar]);

  useEffect(() => {
    if (window.scrollY === 0) {
      const timeoutId = setTimeout(() => {
        setShowNavbar(true);
      }, 1500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const handleHomeClick = () => {
    const eventsSection = document.getElementById("home");

    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleEventsClick = () => {
    const eventsSection = document.getElementById("events");

    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAboutUsClick = () => {
    const eventsSection = document.getElementById("events");

    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleCompiClick = () => {
    const eventsSection = document.getElementById("compi");

    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleStallsClick = () => {
    const eventsSection = document.getElementById("stalls");

    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navbar ${showNavbar ? "nav-show" : "nav-hide"}`}>
      <ul>
        
        <li>
          <a href="#home" title="Home" onClick={handleHomeClick}>
            <img src={n1} alt="" />
          </a>
        </li>
        
        <li>
          <a href="#events" title="About Us" onClick={handleAboutUsClick}>
            <img src={n2} alt="" />
          </a>
        </li>
        <li>
          <a href="#stalls" title="Stalls" onClick={handleStallsClick}>
            <img src={n5} alt="" />
          </a>
        </li>

        <li>
          <a href="#compi" title="Competitions and Workshops" onClick={handleCompiClick}>
            <img src={n4} alt="" />
          </a>
        </li>
        <li>
          <a href="#events" title="Events" onClick={handleEventsClick}>
            <img src={n3} alt="" />
          </a>
        </li>
       
      </ul>
    </div>
  );
};

export default Navbar;
