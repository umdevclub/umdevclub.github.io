import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { ContentPaste } from "@mui/icons-material";

const Code = ({ text, commands = [] }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  function copyToClipboard(e) {
    if (copySuccess) {
      setCopySuccess(false);
    } else {
      if (Array.isArray(commands) && commands.length > 0) {
        const text = commands.join("\n");
        navigator.clipboard.writeText(text);
      } else {
        navigator.clipboard.writeText(text);
      }
      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, [10000]);
    }
  }

  return (
    <Box
      className="code"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {text ? <code>{text}</code> : null}
      <div>
        {Array.isArray(commands) && commands.length > 0
          ? commands.map((command, idx) => (
              <code
                key={idx}
                style={{
                  display: "block",
                  maxWidth: "300px",
                  marginTop: "0.5rem",
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {command}
                <br />
              </code>
            ))
          : null}
      </div>{" "}
      <div title="Copy code">
        <IconButton onClick={copyToClipboard}>
          {copySuccess ? (
            <AssignmentTurnedInOutlinedIcon fontSize="inherit" />
          ) : (
            <ContentPaste fontSize="inherit" />
          )}
        </IconButton>
        {copySuccess}
      </div>
    </Box>
  );
};

export default Code;
