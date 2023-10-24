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
import About from './pages/about';

function App() {
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
          <Eventss/>
          <Footer/>
        </>
        )}  
    </div>
  );
}

export default App;
