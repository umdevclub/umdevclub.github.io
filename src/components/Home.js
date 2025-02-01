import "@/styles/Home.scss";
import backgroundVideo from "@/resources/videos/wavy_video_background.mp4";
import arrow from "@/resources/images/arrow.svg";
import lines from "@/resources/images/lines.svg";
import discordLogo from "@/resources/images/discord-mark-white.svg";

import React from "react";

import Link from "@mui/material/Button";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import PeopleList from "@/components/PeopleList";

import teamMembers from "@/resources/data/team-members.js";
// import { Button } from "@mui/material";
import {
  workshopImages,
  hackathonImages,
  devchampsImages,
} from "@/resources/data/homepage-mission-images.js";

function MissionImageList({ imagesData }) {
  return (
    <ImageList
      sx={{ maxWidth: 500, height: 250 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {imagesData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open(item.img, "_blank");
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

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
        controls={false}
      >
        <source type="video/mp4" src={backgroundVideo} />
      </video>

      <a href="#intro">
        <img className="arrow-homepage" src={arrow} alt="" />
      </a>
      <div className="white-background" id="intro">
        <div className="info">
          <div className="aboutAndText">
            <h1 className="about-us">Who we are</h1>
            <h1 className="team-text">
              University of Manitoba's software development club
            </h1>
          </div>
          <h1 className="description-home">
            devClub helps students achieve their coding goals, and they help us
            accomplish our mission. We empower students to create and develop,
            using new cutting-edge technologies.
            <br />
            We are a group of stem students at UofM driven by curiosity, whether
            you've never written a line of code or you're a master of your
            craft, everyone is welcome.
          </h1>
          <img className="lines-homepage" src={lines} alt="" />
        </div>

        <div className="title-container">
          <h1 className="title-content">WHAT WE DO</h1>
        </div>

        <br />
        <br />

        <div className="missions-container">
          <div className="mission-container">
            <div className="mission-text-container">
              <span className="mission-heading">Workshops and Activities</span>
              <p className="mission-content">
                Our events and workshops are free and open to everyone. We
                organize workshops on a variety of topics, from beginner to
                advanced, and we have something for everyone. We also host a
                variety of shared activities so you can hang out with, and meet
                your peers.
              </p>
            </div>
            <div className="mission-images-container">
              <MissionImageList imagesData={workshopImages} />
            </div>
          </div>

          <div className="mission-container">
            <div className="mission-text-container">
              <span className="mission-heading">Yearly Hackathon</span>
              <p className="mission-content">
                Our yearly hackathon is a 12-hour event where anyone can come
                and build something awesome. It's a great opportunity to learn
                new skills, meet new people, and have a lot of fun.
              </p>
            </div>
            <div className="mission-images-container">
              <MissionImageList imagesData={hackathonImages} />
            </div>
          </div>

          <div className="mission-container">
            <div className="mission-text-container">
              <span className="mission-heading">.devChamps</span>
              <p className="mission-content">
                .DevChamps is a new, official two to three month project-based
                programming battle featuring a new challenge every season. The
                competition is designed to be approachable for beginners while
                also providing a challenge for experienced programmers.
              </p>
            </div>
            <div className="mission-images-container">
              <MissionImageList imagesData={devchampsImages} />
            </div>
          </div>
        </div>

        <div id="join-club"></div>
        <div className="how-to-join-container">
          <div className="title-container ">
            <h1 className="title-content">HOW TO JOIN</h1>
          </div>
          <p className="how-to-join-text">
            We are on the same discord server as&nbsp;
            <a
              href="https://umanitobacssa.ca/"
              variant="body2"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              CSSA
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://umwics.vercel.app/"
              variant="body2"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              WICS
            </a>
            &nbsp;
            <br />
            Don't forget to opt-in for devClub announcement notifications!
          </p>
          <Link
            href="https://discord.umanitobacssa.ca/"
            target="_blank"
            component="button"
            variant="contained"
            size="large"
            className="how-to-join-button"
          >
            <img className="discord-logo" src={discordLogo} alt="" />
            Click here to join
          </Link>
        </div>

        <div className="title-container">
          <h1 className="title-content">OUR TEAM</h1>
        </div>

        <PeopleList peopleData={teamMembers} />
      </div>
    </div>
  );
}

export default Home;
