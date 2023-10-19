import React, { useState, useEffect } from 'react';
import './App.css';
import Stalls from './pages/stalls';
import Navbar from './components/navbar';
import Home from './pages/homepage';
import Footer from './components/footer';
import Compi from './pages/compi';
import Preloader from './pages/preloader';
import Carousel from './pages/events/corousel';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader/>
      ) : (
        <>
          <div className="background" />
          <Navbar />
          <Home />
          <Compi/>
          <Carousel/>
        </>
      )}
    </div>
  );
}

export default App;
