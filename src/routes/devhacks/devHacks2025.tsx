import React from "react";

import "@/styles/Hackathon.scss";

import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import HackathonFaq from "@/components/HackathonFaq";
import codeOfConduct from "@/resources/data/code-of-conduct.js";
import rules from "@/resources/data/rules.js";
import Sponsors from "@/resources/data/devHacksArchive/devHacks2025/Sponsors2025";
import Pictures2025 from "@/resources/data/devHacksArchive/devHacks2025/pictures2025";

export default function DevHacks2025() {
  const navigate = useNavigate();

  return (
    <div className="hackathon-container" dir="ltr">
      <div className="hackathon-welcome container">
        <h1 className="hackathon-welcome heading">&lt;.devHacks 2025&gt;</h1>
        <h2 className="hackathon-welcome description">
          Build Your Dream Project
        </h2>
        <h2 className="hackathon-welcome sub-heading">
          Location: EITC Atrium, E3 270 & E2 229 @ University of Manitoba <br />
          Date & Time: February 21st to 22nd (1:00 PM - 1:00 PM)
        </h2>

        <h3 className="hackathon-welcome intro-text">
          .devHacks is an annual hackathon hosted by .devClub for students to
          showcase their creativity and endurance over a period of 24 hours of
          fun filled development!
        </h3>

        <div className="hackathon-welcome btn-wrapper">
          <Button
            onClick={() => navigate("/github-tutorial")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            Github tutorial
          </Button>
          <Button
            onClick={() => navigate("/project-gallery-2025")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            Project Gallery
          </Button>
          <Button
            onClick={() => navigate("/schedule-2025")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            Schedule
          </Button>
          <Button
            onClick={() => navigate("/prize-categories-2025")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            Prize Categories
          </Button>
        </div>
      </div>

      <h1 className="hackathon-sponsors heading">Sponsors:</h1>
      <Sponsors />

      <h1 className="hackathon-sponsors heading">Event Pictures</h1>
      <Pictures2025 />

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
    </div>
  );
}
