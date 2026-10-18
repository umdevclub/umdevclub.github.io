import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

/**
 * GOOGLE SHEETS INTEGRATION INSTRUCTIONS:
 * -------------------------------------------------------------
 * 1. Create a Google Sheet named ".devHacks 2027 Pre-Registrations".
 * 2. In Google Sheets, go to Extensions > Apps Script.
 * 3. Replace the code with the following 12-line snippet:
 *
 *    function doPost(e) {
 *      try {
 *        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *        var data = JSON.parse(e.postData.contents);
 *        sheet.appendRow([new Date(), data.email]);
 *        return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
 *          .setMimeType(ContentService.MimeType.JSON);
 *      } catch (err) {
 *        return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
 *          .setMimeType(ContentService.MimeType.JSON);
 *      }
 *    }
 *
 * 4. Click Deploy > New deployment.
 *    - Type: Web app
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 5. Copy the Web App URL and add it to your environment variables:
 *    VITE_DEVHACKS_PRE_REG_URL="https://script.google.com/macros/s/.../exec"
 * -------------------------------------------------------------
 */

const SCRIPT_URL = (import.meta.env.VITE_DEVHACKS_PRE_REG_URL as string) || "";

const DevHacksPreRegister: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail || !validateEmail(cleanEmail)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      if (SCRIPT_URL) {
        // Send directly to the Google Apps Script Web App attached to Google Sheets
        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: cleanEmail,
            timestamp: new Date().toISOString(),
          }),
        });
      } else {
        // If the script URL isn't configured yet, log and store in localStorage for safety
        const existing = JSON.parse(
          localStorage.getItem("devhacks_2027_prereg") || "[]"
        );
        existing.push({ email: cleanEmail, date: new Date().toISOString() });
        localStorage.setItem("devhacks_2027_prereg", JSON.stringify(existing));
      }

      setStatus("success");
      setFeedback(
        "🎉 You're on the list! We'll send you an email the instant official registration and challenge tracks go live."
      );
      setEmail("");
    } catch (err) {
      console.error("Pre-registration error:", err);
      setStatus("error");
      setFeedback(
        "Could not submit right now. Please try again or email us directly at umdevclub@gmail.com."
      );
    }
  };

  return (
    <Box
      id="pre-register"
      className="hackathon-pre-register-box"
      sx={{
        width: "90%",
        maxWidth: "850px",
        margin: "4rem auto 2rem",
        padding: { xs: "2rem 1.5rem", sm: "3rem 2.5rem" },
        backgroundColor: "#272729",
        color: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        textAlign: "center",
        boxSizing: "border-box",
        border: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "rgba(212, 175, 55, 0.15)",
          color: "#ffd700",
          border: "1px solid rgba(212, 175, 55, 0.35)",
          padding: "6px 14px",
          borderRadius: "999px",
          fontSize: "0.85rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        <MarkEmailReadIcon sx={{ fontSize: "1.1rem" }} />
        <span>Stay In The Loop</span>
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.3rem" },
          fontWeight: 700,
          fontFamily: '"IBM Plex Mono", monospace',
          letterSpacing: "0.05em",
          mb: 1.5,
        }}
      >
        Pre-Register for .devHacks 2027
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: "600px",
          margin: "0 auto 2rem",
          fontSize: { xs: "0.95rem", sm: "1.1rem" },
          lineHeight: 1.6,
          color: "rgba(255, 255, 255, 0.82)",
          fontFamily: '"IBM Plex Mono", monospace',
        }}
      >
        Be the first to hear when official applications open, workshop topics
        are revealed, and sponsor challenge tracks are announced!
      </Typography>

      {status === "success" ? (
        <Box
          sx={{
            backgroundColor: "rgba(46, 125, 50, 0.2)",
            border: "1px solid #4caf50",
            borderRadius: "12px",
            padding: "1.5rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ fontSize: "3rem", color: "#4caf50", mb: 1 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#81c784",
              fontFamily: '"IBM Plex Mono", monospace',
              mb: 1,
            }}
          >
            Pre-Registration Confirmed!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#e8f5e9",
              fontFamily: '"IBM Plex Mono", monospace',
              mb: 2,
            }}
          >
            {feedback}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setStatus("idle")}
            sx={{
              color: "#ffffff",
              borderColor: "rgba(255, 255, 255, 0.5)",
              textTransform: "none",
              fontFamily: '"IBM Plex Mono", monospace',
              "&:hover": {
                borderColor: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Register Another Email
          </Button>
        </Box>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "12px",
            maxWidth: "580px",
            margin: "0 auto",
            alignItems: "stretch",
          }}
        >
          <TextField
            fullWidth
            type="email"
            placeholder="Enter your student or personal email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            disabled={status === "loading"}
            variant="outlined"
            size="medium"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.95rem",
                "& fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.23)",
                  borderRadius: "8px",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.4)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#d4af37",
                  borderWidth: "2px",
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={status === "loading"}
            sx={{
              backgroundColor: "#d4af37",
              color: "#1a1a1a",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: '"IBM Plex Mono", monospace',
              textTransform: "none",
              padding: "14px 32px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              minHeight: "54px",
              "&:hover": {
                backgroundColor: "#e5be47",
              },
              "&.Mui-disabled": {
                backgroundColor: "#e5be47",
                color: "#1a1a1a",
                opacity: 0.9,
              },
            }}
          >
            {status === "loading" ? (
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  px: 1,
                }}
              >
                <CircularProgress
                  size={18}
                  thickness={5}
                  sx={{ color: "#1a1a1a" }}
                />
                <span style={{ color: "#1a1a1a", fontWeight: 700 }}>
                  Submitting...
                </span>
              </Box>
            ) : (
              "Notify Me"
            )}
          </Button>
        </Box>
      )}

      {status === "error" && (
        <Alert
          severity="error"
          sx={{
            maxWidth: "580px",
            margin: "1rem auto 0",
            backgroundColor: "rgba(211, 47, 47, 0.2)",
            color: "#ffcdd2",
            border: "1px solid #d32f2f",
            fontFamily: '"IBM Plex Mono", monospace',
          }}
        >
          {feedback}
        </Alert>
      )}

      <Typography
        variant="caption"
        sx={{
          display: "block",
          marginTop: "1.5rem",
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.8rem",
          fontFamily: '"IBM Plex Mono", monospace',
        }}
      >
        🔒 No spam ever. We will only contact you with critical .devHacks 2027
        announcements.
      </Typography>
    </Box>
  );
};

export default DevHacksPreRegister;
