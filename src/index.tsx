import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import React from "react";
import { createRoot } from "react-dom/client";

import "@/styles/index.scss";

import App from "./routes/App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#272729",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* Forces the css files to take precedence over mui styles */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
