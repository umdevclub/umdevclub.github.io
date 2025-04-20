import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Sponsors2025 from "@/resources/data/devHacksArchive/devHacks2025/Sponsors2025";
import Sponsors2024 from "@/resources/data/devHacksArchive/devHacks2024/Sponsors2024";
import Pictures2025 from "@/resources/data/devHacksArchive/devHacks2025/pictures2025";
import "@/styles/pictures.scss";
import "@/styles/devHacksHistory.scss";

const devHacksData = {
  2025: {
    sponsors: <Sponsors2025 />,
    eventImages: <Pictures2025 />,
    scheduleLink: "/schedule-2025",
    prizeCategoriesLink: "/prize-categories-2025",
    winners: ["Team Alpha", "Team Beta"],
  },
  2024: {
    sponsors: <Sponsors2024 />,
    eventImages: <Pictures2025 />,
    scheduleLink: "/schedule-2024",
    prizeCategoriesLink: "/prize-categories-2024",
    winners: ["Team Gamma", "Team Delta"],
  },
};

const NavigateButton = ({ link, text }) => {
  const history = useHistory();

  return (
    <Button
      oonClick={() => history.push(link)}
      variant="contained"
      sx={{
        fontSize: "1.5rem",
        fontFamily: "inherit",
        textTransform: "lowercase",
      }}
    >
      {text}
    </Button>
  );
};

const DevHacksDropdown = ({ selectedYear, setSelectedYear }) => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="100%" maxWidth="400px" mb={4}>
        <FormControl fullWidth>
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            sx={{
              fontSize: "1.5rem",
              fontFamily: "inherit",
              fontWeight: "500",
              mt: 2,
              textTransform: "none",
              background: "#272729",
              color: "white",
              "& .MuiSelect-icon": { color: "white" },
              textAlign: "center",
            }}
          >
            {Object.keys(devHacksData)
              .reverse()
              .map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

const DevHacksHistory = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  useEffect(() => {
    // placeholder for future side effects
  }, [selectedYear]);

  return (
    <div
      className="devhacks-history-container"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}
    >
      <DevHacksDropdown
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <div className="section">
        <Typography variant="h4" className="hackathon-sponsors heading">
          Sponsors
        </Typography>
        {devHacksData[selectedYear].sponsors}
      </div>

      <div
        className="hackathon-welcome btn-wrapper"
        style={{ textAlign: "center" }}
      >
        <NavigateButton
          link={devHacksData[selectedYear].scheduleLink}
          text="Schedule"
        />
        <NavigateButton
          link={devHacksData[selectedYear].prizeCategoriesLink}
          text="Prize Categories"
        />
      </div>

      {/* <div className="section">
        <Typography variant="h4" className="hackathon-sponsors heading" align="center">
          Event Pictures
        </Typography>
        {devHacksData[selectedYear].eventImages}
      </div> */}

      <div className="section">
        <Typography
          variant="h4"
          className="hackathon-sponsors heading"
          align="center"
        >
          Winners
        </Typography>
        <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
          {devHacksData[selectedYear].winners.map((winner, index) => (
            <li key={index}>{winner}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevHacksHistory;
