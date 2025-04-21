import "@/styles/PeopleList.scss";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function PersonCard({ personData }) {
  const card = (
    <>
      <CardContent className="people">
        <div className="image-container">
          <img
            src={personData.image}
            alt={`Portrait of .devClub team member ${personData.Name} `}
          />
        </div>
        <br />
        <br />
        <br />
        <Typography variant="h6" component="div" className="person-names">
          {personData.Name}
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
      </CardContent>
      {/*
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          */}
    </>
  );

  return <Box sx={{ width: "100%", height: "100%" }}>{card}</Box>;
}

function ChampionList({ peopleData }) {
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

export default ChampionList;
