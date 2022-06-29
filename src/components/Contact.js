import "@/styles/Contact.scss";
import backgroundVideo from "@/resources/videos/wavy_video_background.mp4";

import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Welcome to the Contact Page!</h1>
      <p>This is the contact page.</p>
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

export default Contact;
