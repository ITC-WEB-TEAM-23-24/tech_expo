import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from './components/navbar';
import Home from './pages/homepage';
import Stalls from './pages/stalls';
import Footer from './components/footer';
import Compi from './pages/compi';
import Preloader from './pages/preloader';
import AOS from "aos"
import "aos/dist/aos.css"
import Skewlayout from './components/skewlayout';
import Eventss from './pages/events';
import Workshops from './pages/workshops';
import Sponsor from './pages/sponsors';
import About from './pages/about';
import Register from './pages/register';
import Helmet from 'react-helmet';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      
      <Helmet>
        <title>TechRndExpo 2023</title>  
        <meta name="description" content="Tech RnD Expo 2023, IIT Bombay website" />
      </Helmet>

      {isLoading ? (
        <Preloader/>
      ) : ( 
        <>
          <Navbar />
          <Home />
          <div className="background" />
          {/* <Sponsor/> */}
          <About/>
          <Stalls />
          <Compi/>
          <Workshops/>
          <Eventss/>
          <Register />
          <Footer/>
        </>
         )}  
    </div>
  );
}

export default Main;
