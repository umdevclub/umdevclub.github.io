import React from "react";

import { Button } from "@mui/material";
import "@/styles/Hackathon.scss";

function Hackathon() {
  return (
    <div className="hackathon-container">
      <h1 className="hackathon-heading">Register for the hackathon!</h1>
      <Button
        variant="contained"
        size="large"
        style={{ letterSpacing: "0.2em" }}
        onClick={() => window.open("/hackathon-register")}
      >
        Register
      </Button>
    </div>
  );
}

export default Hackathon;
