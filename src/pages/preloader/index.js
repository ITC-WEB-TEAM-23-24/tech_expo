import React from "react";
import preloaderGif from "./preloader.mp4";

const preloaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // 100% of the viewport height
};

const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const Preloader = () => {
  return (
    <div style={preloaderStyle}>
      <video src={preloaderGif} autoPlay loop muted style={videoStyle}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;