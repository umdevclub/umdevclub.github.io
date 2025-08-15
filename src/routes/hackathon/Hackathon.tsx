import { Fragment } from "react";

import "@/styles/Hackathon.scss";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import Timer from "@/components/Timer";
import HackathonFaq from "@/components/HackathonFaq";
import codeOfConduct from "@/resources/data/code-of-conduct";
import rules from "@/resources/data/rules";
// import Sponsors from "@/resources/data/devHacksArchive/devHacks2025/Sponsors2025.js";

import HorizontalScroller from "@/components/HorizontalScroller";
import GalleryScroller from "@/components/GalleryScroller";
import { picturesGeneralImages } from "@/resources/data/devHacksArchive/PicturesGeneral";
import { HackathonArchiveCards } from "@/routes/hackathon/HackathonArchiveCards";

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

  // const formId = "war5yv";

  // const handleButtonClick = () => {
  //   if (window?.Tally) {
  //     window.Tally.openPopup(formId, {
  //       layout: "modal",
  //       width: 700,
  //       autoClose: 5000,
  //     });
  //   }
  // };

  const navigate = useNavigate();

  return (
    <div className="hackathon-container" dir="ltr">
      {/* <div className="hackathon-register-container"> */}
      {/* <h1 className="hackathon-register heading"></h1> */}
      {/* <h1 className="hackathon-register heading">
          <Timer />
        </h1> */}
      {/* </div> */}
      <div className="hackathon-welcome container">
        <h1 className="hackathon-welcome heading">&lt;.devHacks&gt;</h1>
        <h2 className="hackathon-welcome description">
          Build Your Dream Project
        </h2>

        {/* {
          <h2 className="hackathon-welcome sub-heading">
            Location: EITC Atrium, E3 270 & E2 229 @ University of Manitoba{" "}
            <br />
            Date & Time: February 21st to 22nd (1:00 PM - 1:00 PM)
          </h2>
        } */}

        <h3 className="hackathon-welcome intro-text">
          .devHacks is an annual hackathon hosted by .devClub for students to
          showcase their creativity and endurance over a period of 24 hours of
          fun filled development!
        </h3>
        <div className="hackathon-welcome btn-wrapper">
          {/* <Button
            onClick={handleButtonClick}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            Register now!
          </Button> */}
          {/* <Button
            onClick={() => navigate("/project-gallery-2025")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            devHacks 2025 Projects
          </Button> */}
          {/* <Button
            onClick={() => navigate("/devhacks/2025")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            devHacks 2025 archive
          </Button>
          <Button
            onClick={() => navigate("/devhacks/2024")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            devHacks 2024 archive
          </Button> */}
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

          {/* <Button
            onClick={() => navigate("/schedule")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            Schedule
          </Button> */}
          {/* <Button
            onClick={() => navigate("/prize-categories")}
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "lowercase",
            }}
          >
            Prize Categories
          </Button> */}
        </div>
      </div>

      {/* <hi className="hackathon-sponsors heading">Our Sponsors:</hi>
      <Sponsors /> */}

      <h1 className="hackathon-sponsors heading">Event Pictures</h1>
      <GalleryScroller images={picturesGeneralImages} />

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
                <Fragment key={index}>
                  <li>{rule.item}</li>
                  {rule.subItem.length > 0 && (
                    <ol className="hackathon-rules alpha-list">
                      {rule.subItem.map((subItem, idx) => (
                        <li key={idx}>{subItem}</li>
                      ))}
                    </ol>
                  )}
                </Fragment>
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
                <Fragment key={index}>
                  <li>{codeConduct.item()}</li>
                  {codeConduct.subItem.length > 0 && (
                    <ol className="hackathon-code-conduct alpha-list">
                      {codeConduct.subItem.map((subItem, idx) => (
                        <li key={idx}>{subItem}</li>
                      ))}
                    </ol>
                  )}
                </Fragment>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="container">
        <HackathonFaq />
      </div>
    </div>
  );
}

export default Hackathon;
