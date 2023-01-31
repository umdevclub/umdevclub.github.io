import React, { useEffect } from "react";

import { CircularProgress } from "@mui/material";

function Hackathon() {
  useEffect(() => {
    window.location.href = "https://3utrb7n0muk.typeform.com/to/RvKJTfsJ";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size="lg" />
      <p>Loading...</p>
    </div>
  );
}

export default Hackathon;
