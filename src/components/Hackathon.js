import React from "react";

import "@/styles/Hackathon.scss";

import rules from "@/resources/data/rules.js";
import codeOfConduct from "@/resources/data/code-of-conduct";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Hackathon() {
  // const btnStyles = {
  //   letterSpacing: "0.2em",
  //   height: "fit-content",
  //   color: "white",
  //   borderColor: "white",
  //   fontWeight: "bold",
  //   "&:hover": {
  //     background: "white",
  //     color: "#272729",
  //   },
  // };

  const formId = "meRpLq";

  const handleButtonClick = () => {
    if (window?.Tally) {
      window.Tally.openPopup(formId, {
        layout: "modal",
        width: 700,
        autoClose: 5000,
      });
    }
  };

  const history = useHistory();

  return (
    <div className="hackathon-container" dir="ltr">
      <div className="hackathon-welcome container">
        <h1 className="hackathon-welcome heading">.devHacks</h1>
        <h2 className="hackathon-welcome sub-heading">
          Location: University of Manitoba <br />
          Tentative Dates: February 23rd to 24th
        </h2>
        <h3 className="hackathon-welcome intro-text">
          .devHacks is an annual hackathon hosted by .devClub for students to
          showcase their creativity and endurance over a period of 24 hours of
          fun filled development!
        </h3>
        <div className="hackathon-welcome btn-wrapper">
          <Button
            onClick={handleButtonClick}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            Sign up for updates!
          </Button>
          <Button
            onClick={() => history.push("/github-tutorial")}
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
        </div>
      </div>
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
            {rules.map((rule, index) => {
              return (
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
              );
            })}
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
            {codeOfConduct.map((codeConduct, index) => {
              return (
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
              );
            })}
          </ol>
        </div>
      </div>
      <div className="hackathon-register-container">
        <h1 className="hackathon-register heading">Coming soon!</h1>
      </div>
    </div>
  );
}

export default Hackathon;