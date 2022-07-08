import "@/styles/Home.scss";
import backgroundVideo from "@/resources/videos/wavy_video_background.mp4";
import arrow from "@/resources/images/arrow.svg";
import lines from "@/resources/images/lines.svg";

import React from "react";

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-text">WELCOME TO .DEVCLUB</h1>
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

      <img className="arrow-homepage" src={arrow} alt="" />
      <div className="white-background">
        <div className="info">
          <div className="aboutAndText">
            <h1 className="about-us">about us</h1>
            <h1 className="team-text">
              team that will give you the best university development
              experience.
            </h1>
          </div>
          <h1 className="description-home">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
        </div>
        <div className="weDoPart">
          <h1 className="whatWeDo"> WHAT WE DO</h1>
        </div>

        <img className="lines-homepage" src={lines} alt="" />
      </div>
    </div>
  );
}

export default Home;
