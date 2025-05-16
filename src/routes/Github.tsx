import { ReactNode, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "@/styles/DevhacksGithub.scss";
import GithubWindows from "@/routes/GithubWindows";
import GithubUnix from "@/routes/GithubUnix";

function CustomTabPanel({ children, value, index, ...other }: ICustomTabPanel) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%" }}
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

interface ICustomTabPanel {
  children: ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function GitHub() {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
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

export default GitHub;
