import { useState } from "react";
import "@/styles/PeopleList.scss";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import discordLogo from "@/resources/images/discord-mark-white.svg";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import teamConfig from "@/resources/data/teamConfig";
import { ITeamMember } from "@/resources/data/types";

function PersonCard({ personData }: { personData: ITeamMember }) {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <CardContent className="person">
        <div className="image-container">
          <img
            src={personData.image}
            alt={`Portrait of .devClub team member ${personData.firstName} ${personData.lastName}`}
          />
        </div>
        <Typography variant="h6" component="div" className="person-names">
          {personData.firstName}
        </Typography>
        <Typography variant="h6" component="div" className="person-names">
          {personData.middleName}
        </Typography>
        <Typography variant="h6" component="div" className="person-names">
          {personData.lastName}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          className="person-position"
        >
          {personData.role}
        </Typography>
        {(personData.linkedin ||
          personData.github ||
          personData.website ||
          personData.instagram ||
          personData.discord) && (
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
            {personData.discord && (
              <a
                href={personData.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="discord-link"
              >
                <img src={discordLogo} alt="Discord" />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Box>
  );
}

export default function PeopleList() {
  const yearLabels = Object.keys(teamConfig).reverse();
  const [selectedYear, setSelectedYear] = useState(yearLabels[0]);
  const peopleData = teamConfig[selectedYear];

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
              mt: 2,
              textTransform: "none",
              background: "#272729",
              color: "white",
              "& .MuiSelect-icon": { color: "white" },
              textAlign: "center",
            }}
          >
            {yearLabels.map((label) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div className="peoples-grid">
        {peopleData.map((person, index) => (
          <Box
            sx={{
              width: 180,
              height: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            key={index}
          >
            <PersonCard personData={person} />
          </Box>
        ))}
      </div>
    </>
  );
}
