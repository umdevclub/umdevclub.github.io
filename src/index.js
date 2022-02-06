import React from "react";
import ReactDOM from "react-dom";
import "@/styles/index.scss";
import App from "@/components/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";

const theme = createTheme({
  /* Add palette later */
});

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* Forces the css files to take precedence over mui styles */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
