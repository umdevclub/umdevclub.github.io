import "@/styles/Home.scss";
import backgroundVideo from "@/resources/videos/wavy_video_background.mp4";

import React from "react";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to .devClub!</h1>
      <video
        className="home-video"
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
      >
        <source type="video/mp4" src={backgroundVideo} />
      </video>
    </div>
  );
}

export default Home;
