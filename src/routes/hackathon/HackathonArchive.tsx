import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import HackathonWinners from "@/routes/hackathon/hackathonWinners";

import HackathonYearPictures from "@/resources/data/devHacksArchive/HackathonYearPictures";
import HackathonYearSponsors from "@/resources/data/devHacksArchive/HackathonYearSponsors";

import { HackathonInfo } from "@/types/hackathon/hackathon";

function HackathonArchive() {
  const { data } = useLoaderData() as HackathonInfo;
  const navigate = useNavigate();

  return (
    <div className="hackathon-container" dir="ltr">
      <div className="hackathon-welcome container">
        <h1 className="hackathon-welcome heading">&lt;{data.title}&gt;</h1>
        <h2 className="hackathon-welcome description">{data.subtitle}</h2>
        <h2 className="hackathon-welcome sub-heading">
          Location: {data.location} <br />
          Date & Time: {data.date}
        </h2>

        <h3 className="hackathon-welcome intro-text">{data.description}</h3>

        <div className="hackathon-welcome btn-wrapper">
          {data.links.map((link, index) => (
            <Button
              key={index}
              onClick={() => navigate(link.path)}
              variant="contained"
              sx={{
                fontSize: "1.5rem",
                fontFamily: "inherit",
                mt: 3,
                textTransform: "lowercase",
              }}
            >
              {link.text}
            </Button>
          ))}
        </div>
      </div>

      {data.year === "2026" && (
        <section className="hackathon-recap-video container">
          <h1 className="hackathon-sponsors heading">Recap Video</h1>
          <div className="hackathon-recap-video_frame">
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/CBMg3kI84ok"
              title=".devHacks 2026 Recap"
              allow="autoplay; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      <h1 className="hackathon-sponsors heading">Sponsors</h1>
      <HackathonYearSponsors year={data.year} />

      <h1 className="hackathon-sponsors heading"> {data.year} Winners</h1>
      <HackathonWinners year={data.year} />

      <h1 className="hackathon-sponsors heading">Pictures</h1>
      <HackathonYearPictures year={data.year} />
    </div>
  );
}

export default HackathonArchive;
