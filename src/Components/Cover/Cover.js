import React from "react";
import "./Cover.css";
import coverVideo from "../../Media/CoverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Mateo Arcieri</h1>
      <p>Developer | College Student </p>
    </div>
  );
};

export default Cover;
