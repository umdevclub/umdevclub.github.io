import React from "react";
import scheduleBg from "@/resources/images/devhacks/2025/devhacks2025-schedule-bg.png";
import Box from "@mui/material/Box";
import "@/styles/Devhacks2025Schedule.scss";
// import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
const Devhacks2025Schedule = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${scheduleBg})`,
        minHeight: "100vh",
        height: "100%",
        fontSize: "3rem",
      }}
    >
      <Box className="schedule-2025-block">
        <h1 className="header-2025-title">Schedule</h1>
      </Box>

      <div class="event-box">
        <Typography variant="h5" className="date-header">
          FEB 21
        </Typography>

        <Box className="event">
          <Typography className="event-time">8:00 - 10:00</Typography>
          <Typography className="event-desc">CHECK-IN (REQUIRED)</Typography>
        </Box>

        <Box className="eventAlt">
          <Typography className="event-time-alt">10:00 - 10:30</Typography>
          <Typography className="event-desc-alt">
            OPENING CEREMONY (E3-270)
          </Typography>
        </Box>

        <Box className="event">
          <Typography className="event-time">10:30 - 1:00</Typography>
          <Typography className="event-desc">
            MEET & GREET + CAREER FAIR (ATRIUM)
          </Typography>
        </Box>

        <Box className="eventAlt">
          <Typography className="event-time-alt">1:00 PM</Typography>
          <Typography className="event-desc-alt">
            {"<< HACKING STARTS >>"}
          </Typography>
        </Box>

        <Box className="event">
          <Typography className="event-time">2:00 - 3:00</Typography>
          <Typography className="event-desc">LUNCH (ATRIUM)</Typography>
        </Box>

        <Box className="eventAlt">
          <Typography className="event-time-alt">6:00 - 7:00</Typography>
          <Typography className="event-desc-alt">DINNER (ATRIUM)</Typography>
        </Box>

        <Box className="event">
          <Typography className="event-time">10:00 PM</Typography>
          <Typography className="event-desc">DOORS CLOSE</Typography>
        </Box>

        <Typography variant="h5" className="date-header">
          FEB 22
        </Typography>

        <Box className="event">
          <Typography className="event-time">9:00 - 10:00</Typography>
          <Typography className="event-desc">BREAKFAST (ATRIUM)</Typography>
        </Box>

        <Box className="eventAlt">
          <Typography className="event-time-alt">1:00 PM</Typography>
          <Typography className="event-desc-alt">
            {"<< HACKING CLOSES >>"}
          </Typography>
        </Box>

        <Box className="event">
          <Typography className="event-time">1:00 - 2:00</Typography>
          <Typography className="event-desc">LUNCH (ATRIUM)</Typography>
        </Box>

        <Box className="eventAlt">
          <Typography className="event-time-alt">2:15 - 5:00</Typography>
          <Typography className="event-desc-alt">JUDGING (ATRIUM)</Typography>
        </Box>

        <Box className="event">
          <Typography className="event-time">6:00 - 7:00</Typography>
          <Typography className="event-desc">
            CLOSING CEREMONY (E3-270)
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default Devhacks2025Schedule;
