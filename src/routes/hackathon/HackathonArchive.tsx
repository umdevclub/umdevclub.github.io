import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import HackathonFaq from "@/components/HackathonFaq";

import codeOfConduct from "@/resources/data/code-of-conduct";
import Timer from "@/components/Timer";
import HackathonYearPictures from "@/resources/data/devHacksArchive/HackathonYearPictures";
import HackathonYearSponsors from "@/resources/data/devHacksArchive/HackathonYearSponsors";
import rules from "@/resources/data/rules";
import { HackathonInfo } from "@/resources/data/types";
import HorizontalScroller from "@/components/HorizontalScroller";
import { HackathonArchiveCards } from "@/routes/hackathon/HackathonArchiveCards";

function HackathonArchive() {
  const { data } = useLoaderData() as HackathonInfo;
  const navigate = useNavigate();

  return (
    <div className="hackathon-container" dir="ltr">
      <div className="hackathon-welcome container">
        {data.year === "2026" && (
          <div className="hackathon-register-container">
            <h1 className="hackathon-register heading">
              <Timer />
            </h1>
          </div>
        )}
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

      <h1 className="hackathon-sponsors heading">Sponsors</h1>
      <HackathonYearSponsors year={data.year} />

      {/* <h1 className="hackathon-sponsors heading">Event Pictures</h1>
      <HackathonYearPictures year={data.year} /> */}

      {data.year !== "2026" && (
        <>
          <h1 className="hackathon-sponsors heading">Event Pictures</h1>
          <HackathonYearPictures year={data.year} />
        </>
      )}

      <div className="hackathon-rules container" id="rules">
        <h1 className="hackathon-rules heading">Rules:</h1>
        <div className="hackathon-rules text-container">
          <p>
            All hackathon participants are required to follow the .devHacks
            rules. These rules will be enforced throughout the event. We expect
            cooperation to ensure a fair and fun environment.Any failure to
            follow these rules will be dealt with accordingly and collectively
            by the organizers.
          </p>
          <ol>
            {rules.map((rule, index) => (
              <React.Fragment key={index}>
                <li>{rule.item}</li>
                {rule.subItem.length > 0 && (
                  <ol className="hackathon-rules alpha-list">
                    {rule.subItem.map((subItem, idx) => (
                      <li key={idx}>{subItem}</li>
                    ))}
                  </ol>
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </div>

      <div className="hackathon-code-conduct container" id="code-of-conduct">
        <h1 className="hackathon-code-conduct heading">Code Of Conduct:</h1>
        <div className="hackathon-code-conduct text-container">
          <p>
            All attendees including participants, sponsors, partners,
            volunteers, and organizers are required to agree with the following
            code of conduct. The following code will be enforced throughout the
            event. We expect cooperation to ensure a safe and fun environment
            for everyone. Any failure to meet these guidelines will be dealt
            with accordingly and collectively by the organizers.
          </p>
          <ol>
            {codeOfConduct.map((codeConduct, index) => (
              <React.Fragment key={index}>
                <li>{codeConduct.item()}</li>
                {codeConduct.subItem.length > 0 && (
                  <ol className="hackathon-code-conduct alpha-list">
                    {codeConduct.subItem.map((subItem, idx) => (
                      <li key={idx}>{subItem}</li>
                    ))}
                  </ol>
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </div>

      <div className="container">
        <HackathonFaq />
      </div>
      {data.year === "2026" && (
        <>
          <h1 className="hackathon-sponsors heading">Go Back in Time</h1>
          <HorizontalScroller>
            {HackathonArchiveCards.map((archive) => (
              <button
                key={archive.year}
                type="button"
                className="archive-card"
                onClick={() => navigate(archive.route)}
              >
                <div
                  className="archive-card-media"
                  style={{ backgroundImage: `url(${archive.image})` }}
                />
                <div className="archive-card-overlay" />
                <div className="archive-card-content">
                  <h3 className="archive-card-title">{archive.title}</h3>
                  <p className="archive-card-sub">{archive.subtitle}</p>
                </div>
              </button>
            ))}
          </HorizontalScroller>
        </>
      )}
    </div>
  );
}

export default HackathonArchive;
