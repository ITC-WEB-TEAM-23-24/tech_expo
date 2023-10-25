import React, { useEffect, useState } from "react";
import preloaderGif from "./preloader.webm";

const preloaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "relative",
};

const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const textContainerStyle = {
  position: "absolute",
  top: "80%",
  left: "48%",
  transform: "translate(-50%, -50%)",
  color: '#b9a3bf',
  fontSize: "2rem",
  fontFamily: "Verdana, sans-serif", // Change the font family
  fontWeight: "1000", // Change the font weight
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  fontSize: "50px",
};

const Preloader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["VORTEX", "TO", "THE", "FUTURE"];
  const delayBetweenWords = 500;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, delayBetweenWords);

    return () => {
      clearInterval(interval);
    };
  }, [currentWordIndex]);

  const updateFontSize = () => {
    const isMobile = window.innerWidth < 680;
    return isMobile ? "30px" : "50px";
  };

  const fontSize = updateFontSize();

  return (
    <div style={preloaderStyle}>
      <video src={preloaderGif} autoPlay loop muted style={videoStyle}>
      </video>
      <div
        style={{
          ...textContainerStyle,
          fontSize: fontSize,
        }}
      >
        {words.slice(0, currentWordIndex).map((word, index) => (
          <span key={index}>{word}&nbsp;</span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
