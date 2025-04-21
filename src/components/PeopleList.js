import React, { useState } from "react";
import "@/styles/PeopleList.scss";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";

// Import your data modules for each year
import execs2025 from "@/resources/data/teamMemberData/team-members2025-2026";
import execs2024 from "@/resources/data/teamMemberData/team-members2024-2025";
import execs2023 from "@/resources/data/teamMemberData/team-members2023-2024";
import execs2022 from "@/resources/data/teamMemberData/team-members2022-2023";

function PersonCard({ personData }) {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <CardContent className="people">
        <div className="image-container">
          <img
            src={personData.image}
            alt={`Portrait of .devClub team member ${personData.name}`}
          />
        </div>
        <Typography variant="h6" component="div" className="person-names">
          {personData.name}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          className="person-position"
        >
          {personData.role}
        </Typography>
        <Typography variant="body2" className="person-description">
          {personData.bio}
        </Typography>
        {(personData.linkedin ||
          personData.github ||
          personData.website ||
          personData.instagram) && (
          <div className="social-icons">
            {personData.linkedin && (
              <a
                href={personData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            )}
            {personData.github && (
              <a
                href={personData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            )}
            {personData.website && (
              <a
                href={personData.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
              >
                <LanguageIcon />
              </a>
            )}
            {personData.instagram && (
              <a
                href={personData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Box>
  );
}

export default function PeopleList() {
  // Map each label to its corresponding data
  const execCollections = {
    Current: execs2025,
    "2024-2025": execs2024,
    "2023-2024": execs2023,
    "2022-2023": execs2022,
  };

  const [selectedYear, setSelectedYear] = useState("Current");
  const peopleData = execCollections[selectedYear];

  return (
    <>
      <Box display="flex" justifyContent="center" mb={4}>
        <FormControl sx={{ minWidth: 200 }}>
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            sx={{
              fontSize: "1.0rem",
              fontFamily: "IBM Plex Mono",
              // fontWeight: "500",
              mt: 2,
              textTransform: "none",
              background: "#272729",
              color: "white",
              "& .MuiSelect-icon": { color: "white" },
              textAlign: "center",
            }}
          >
            {Object.keys(execCollections).map((label) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div className="peoples-grid">
        {peopleData.map((person, index) => (
          <div
            style={{
              width: 180,
              height: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            key={index}
          >
            <PersonCard personData={person} />
          </div>
        ))}
      </div>
    </>
  );
}
