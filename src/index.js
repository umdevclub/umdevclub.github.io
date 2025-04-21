import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/components/App";
import ErrorBoundary from "@/components/ErrorBoundary";

import "@/styles/index.scss";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StyledEngineProvider injectFirst>
        {/* Forces the css files to take precedence over mui styles */}
        <BrowserRouter basename="/">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </StyledEngineProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
