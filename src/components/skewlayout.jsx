import React, { useRef, useEffect, useState } from "react";

export default function Skewlayout({children}) {
    const size = useWindowSize();
    const app = useRef();
    const scrollContainer = useRef()
    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    };

    const skewScrolling = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;
        const difference = data.current - data.rounded;
        const acceleration = difference / size.width;
        const velocity = +acceleration;
        const skew = velocity * 40.5;
        scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
        requestAnimationFrame(() => skewScrolling());
    };

    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

    useEffect(() => {
        setBodyHeight();
    }, [size.height]);
    const setBodyHeight = () => {
        document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
        }px`;
    };

    return (
        <div ref={app}>
            <div ref={scrollContainer}>
                {children}
            </div>
        </div>
    )
}


function useWindowSize() {
    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  }