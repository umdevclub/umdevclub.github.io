import scheduleBg from "@/resources/images/devhacks/2024/devhacks2024-schedule-bg.jpeg";
import Box from "@mui/material/Box";
import "@/styles/Devhacks2024Schedule.scss";
import Divider from "@mui/material/Divider";

export default function Devhacks2024Schedule() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${scheduleBg})`,
        minHeight: "100vh",
        height: "100%",
        fontSize: "3rem",
      }}
    >
      <Box className="schedule-2024-block">
        <h1 className="header-2024-title">Schedule</h1>
      </Box>
      <Divider
        sx={{
          width: "80%",
          height: "2px",
          backgroundColor: "#92cd03",
          margin: "2rem auto",
        }}
      />
      <Box className="schedule-2024-block">
        <h2>FEB 23</h2>
        <Box width="100%" pl={[0, 6]}>
          <Box
            fontSize="1rem"
            fontWeight={700}
            color="black"
            sx={{
              background: "#dddddd",
              padding: "0.25rem 0.4rem",
              borderRadius: "4px",
              letterSpacing: "-0.02em",
              width: "fit-content",
              marginBottom: "1.5rem",
            }}
          >
            REGISTRATION <span>|</span> 11:30 AM - 12:00 PM [
            <span>REQUIRED</span>]
          </Box>
          <Box mb={2}>
            <Box
              sx={{
                display: ["block", "flex"],
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Meet & Greet</h3>
              <p className="schedule-2024-time">12 PM - 3 PM | EITC Atrium</p>
            </Box>
            <p>Sponsor Booths | Team Matching | Workshop | Food</p>
          </Box>
          <Box mb={2}>
            <Box
              sx={{
                display: ["block", "flex"],
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Cotton Candy Station</h3>
              <p className="schedule-2024-time">1:00 PM | EITC Atrium</p>
            </Box>
            <p>Sugar Treat</p>
          </Box>
          <Box mb={2}>
            <Box
              sx={{
                display: ["block", "flex"],
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Hackathon Kickoff</h3>
              <p className="schedule-2024-time">5:00 PM | E3 270</p>
            </Box>
            <p>Start Coding | Mentors</p>
          </Box>
          <Box mb={2}>
            <Box
              sx={{
                display: ["block", "flex"],
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Dinner</h3>
              <p className="schedule-2024-time">6:00 PM | EITC Atrium</p>
            </Box>
            <p>Food | Pop | Juice</p>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "80%",
          height: "2px",
          backgroundColor: "#92cd03",
          margin: "2rem auto",
        }}
      />
      <Box className="schedule-2024-block" mb={4}>
        <h2>FEB 24</h2>
        <Box width="100%" pl={[0, 6]}>
          <Box
            fontSize="1rem"
            fontWeight={700}
            color="black"
            sx={{
              background: "#dddddd",
              padding: "0.25rem 0.4rem",
              borderRadius: "4px",
              letterSpacing: "-0.02em",
              width: "fit-content",
              marginBottom: "1.5rem",
            }}
          >
            CHECK-IN <span>|</span> 7:30 AM - 8:00 AM [<span>REQUIRED</span>]
          </Box>
          <Box mb={2}>
            <Box
              sx={{
                display: ["block", "flex"],
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Coding Retreat</h3>
              <p className="schedule-2024-time">8:00 AM | EITC E3 270</p>
            </Box>
            <p>Breakfast @ 9:00 AM</p>
          </Box>
          <Box mb={2}>
            <Box
              sx={{
                display: ["block", "flex"],
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Mid-day</h3>
              <p className="schedule-2024-time">12:00 PM | EITC Atrium</p>
            </Box>
            <p>Lunch | Socialize</p>
          </Box>
          <Box mb={2}>
            <Box
              sx={{
                display: ["block", "flex"],
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Coding Wrap-Up</h3>
              <p className="schedule-2024-time">
                5:00 PM | ETIC Atrium & E3 270
              </p>
            </Box>
            <p>Submission | Project Presentations | Judging | Dinner</p>
          </Box>
          <Box mb={2}>
            <Box
              sx={{
                display: ["block", "flex"],
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Closing Ceremony</h3>
              <p className="schedule-2024-time">7:00 PM | E3 270</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
