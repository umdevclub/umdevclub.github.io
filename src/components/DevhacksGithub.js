import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "@/styles/DevhacksGithub.scss";
import GithubWindows from "@/components/GithubWindows";
import GithubUnix from "@/components/GithubUnix";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="github-container">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "fit-content",
          marginTop: 2,
          marginBottom: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="github-tutorial"
        >
          <Tab label="Windows" {...a11yProps(0)} />
          <Tab label="MacOS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <GithubWindows />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <GithubUnix />
      </CustomTabPanel>
    </div>
  );
}
