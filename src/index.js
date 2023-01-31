import React from "react";
import ReactDOM from "react-dom";

import App from "@/components/App";
import ErrorBoundary from "@/components/ErrorBoundary";

import "@/styles/index.scss";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

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

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StyledEngineProvider injectFirst>
        {/* Forces the css files to take precedence over mui styles */}
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </StyledEngineProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
