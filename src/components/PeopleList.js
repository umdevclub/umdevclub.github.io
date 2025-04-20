import "@/styles/PeopleList.scss";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";

function PersonCard({ personData }) {
  const card = (
    <>
      <CardContent className="people">
        <div className="image-container">
          <img
            src={personData.image}
            alt={`Portrait of .devClub team member ${personData.name}`}
          />
        </div>
        <br />
        <br />
        <br />
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
    </>
  );

  return <Box sx={{ width: "100%", height: "100%" }}>{card}</Box>;
}

function PeopleList({ peopleData }) {
  return (
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
  );
}

export default PeopleList;
