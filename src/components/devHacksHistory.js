import React, { useState } from "react";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import Sponsors2025 from "@/resources/data/devHacksArchive/devHacks2025/Sponsors2025";
import Sponsors2024 from "@/resources/data/devHacksArchive/devHacks2024/Sponsors2024";

const devHacksData = {
  2025: {
    sponsors: <Sponsors2025 />,
    eventImages: ["/images/event2025-1.png", "/images/event2025-2.png"],
    scheduleLink: "/schedule-2025",
    prizeCategoriesLink: "/prizes-2025",
    winners: ["Team Alpha", "Team Beta"],
  },
  2024: {
    sponsors: <Sponsors2024 />,
    eventImages: ["/images/event2024-1.png", "/images/event2024-2.png"],
    scheduleLink: "/schedule-2024",
    prizeCategoriesLink: "/prizes-2024",
    winners: ["Team Gamma", "Team Delta"],
  },
};

const DevHacksDropdown = ({ selectedYear, setSelectedYear }) => {
  return (
    <Box width="40%" mb={4}>
      <FormControl fullWidth sx={{ background: "#5d5c5c", borderRadius: 1 }}>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          sx={{
            color: "white",
            background: "#272729",
            "& .MuiSelect-icon": { color: "white" },
          }}
        >
          {Object.keys(devHacksData)
            .reverse()
            .map((year) => (
              <MenuItem
                key={year}
                value={year}
                sx={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                .devHacks {year}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const DevHacksHistory = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  return (
    <div className="devhacks-history-container">
      {/* Dropdown for selecting year */}
      <DevHacksDropdown
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      {/* Display content for selected year */}
      <div className="year-content">
        <h3>Sponsors</h3>
        <div className="sponsors">{devHacksData[selectedYear].sponsors}</div>

        <h3>Event Pictures</h3>
        <div className="event-pictures">
          {devHacksData[selectedYear].eventImages.map((image, index) => (
            <img key={index} src={image} alt={`Event ${index + 1}`} />
          ))}
        </div>

        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href={devHacksData[selectedYear].scheduleLink}>View Schedule</a>
          </li>
          <li>
            <a href={devHacksData[selectedYear].prizeCategoriesLink}>
              View Prize Categories
            </a>
          </li>
        </ul>

        <h3>Winners</h3>
        <ul>
          {devHacksData[selectedYear].winners.map((winner, index) => (
            <li key={index}>{winner}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevHacksHistory;
