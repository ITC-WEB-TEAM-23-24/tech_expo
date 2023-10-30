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
import Workshops from './pages/workshops';
import Sponsor from './pages/sponsors';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Page from './pages/page';

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
      
     {/* {isLoading ? (
        <Preloader/>
      ) : (  */}
        <>
          {/* <Navbar />
          <Home />
          <div className="background" /> */}
          {/* <Sponsor/> */}
          {/* <About/>
          <Stalls />
          <Compi/>
          <Workshops/>
          <Eventss/>
          <Footer/> */}
        </>
        {/* )}   */}
        {/* {isLoading ? (
        <Preloader/>
      ) : (  */}
          <Router>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/workshops/:name' element={<Page/>}/>
              <Route path='/competitions/:name' element={<Page/>}/>
            </Routes>
          </Router>
          {/* )}   */}
    </div>
  );
}

export default App;
