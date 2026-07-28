import "@/styles/Hackathon.scss";

import { Button } from "@mui/material";

function Hackathon2027() {
  return (
    <div className="hackathon-container" dir="ltr">
      <div className="hackathon-welcome container">
        <h1 className="hackathon-welcome heading">&lt;.devHacks 2027&gt;</h1>
        <h2
          className="hackathon-welcome description"
          style={{ textAlign: "center" }}
        >
          {"Manitoba's largest "}
          <del>24-hour</del>{" "}
          <strong>
            <em>48-hour</em>
          </strong>{" "}
          hackathon.
        </h2>
        <h2 className="hackathon-welcome sub-heading">
          📅 Feb. 19 - 21, 2027
          <br />
          📍 Engineering, Information and Technology Complex, University of
          Manitoba, Winnipeg, MB
        </h2>
        <div
          className="hackathon-welcome btn-wrapper"
          style={{ justifyContent: "center" }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              mt: 3,
              textTransform: "none",
            }}
          >
            COMING SOON
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hackathon2027;
