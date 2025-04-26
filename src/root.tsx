import "@/styles/index.scss";
import "@/styles/ErrorBoundary.scss";

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";
import { ReactNode } from "react";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Route } from "./+types/root";

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

export function meta() {
  return [
    { charSet: "utf-8" },
    { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
    { name: "language", content: "English" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    {
      name: "theme-color",
      content: "white",
      media: "(prefers-color-scheme: light)",
    },
    {
      name: "theme-color",
      content: "#382f29",
      media: "(prefers-color-scheme: dark)",
    },
    { property: "og:type", content: "article" }, // Meta tags for Facebook, LinkedIn, and Google
    { property: "og:title", content: ".devClub" },
    {
      property: "og:description",
      content: "University of Manitoba's .devClub",
    },
    { property: "og:url", content: "https://devclub.ca" },
    { property: "og:site_name", content: ".devClub" },
    { name: "title", content: ".devClub" },
    { name: "description", content: "University of Manitoba's .devClub" },
  ];
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    console.log("Route error");
    console.log(error.status, error.statusText);
    console.log(error.data);
  }

  if (error instanceof Error) {
    console.log("Error");
    console.log(error.message);
  }

  return (
    <div className="error-boundary-container">
      <h1 className="error-boundary-heading">Oops! Something went wrong!</h1>
      <p className="error-boundary-text">
        Looks like there is some problem that we are facing. Please check in
        later!
      </p>
      <div className="error-boundary-button-container">
        <button className="error-boundary-button" onClick={() => navigate(0)}>
          Refresh page
        </button>
        <button className="error-boundary-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>UofM's .devClub</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
