import { IChampion } from "@/resources/data/types";
import "@/styles/PeopleList.scss";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function PersonCard({ personData }: { personData: IChampion }) {
  const card = (
    <>
      <CardContent className="people">
        <div className="image-container">
          <img
            src={personData.image}
            alt={`Portrait of .devClub team member ${personData.name} `}
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
          {personData.challenge}
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

function ChampionList({ peopleData }: { peopleData: IChampion[] }) {
  return (
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
  );
}

export default ChampionList;
