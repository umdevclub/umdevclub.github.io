import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { ContentPaste } from "@mui/icons-material";

const Code = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  function copyToClipboard(e) {
    if (copySuccess) {
      setCopySuccess(false);
    } else {
      navigator.clipboard.writeText(text);
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
      <code>{text}</code>
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
