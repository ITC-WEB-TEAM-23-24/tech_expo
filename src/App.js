import React, { useState, useEffect } from 'react';
import './App.css';
import Stalls from './pages/stalls';
import Navbar from './components/navbar';
import Home from './pages/homepage';
import Footer from './components/footer';
import Compi from './pages/compi';
import Preloader from './pages/preloader';
import AOS from "aos"
import "aos/dist/aos.css"
import Skewlayout from './components/skewlayout';
import Eventss from './pages/events';
import Sponsor from './pages/sponsors';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* {isLoading ? (
        <Preloader/>
      ) : ( */}
        <>
          <Navbar />
          <Home />
          <div className="background" />
          {/* <Sponsor/> */}
          <Stalls />
          <Compi/>
          <Eventss/>
        </>
      {/* )} */}
    </div>
  );
}

export default App;
