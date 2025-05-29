import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorBoundary from "@/components/ErrorBoundary";

import DevHacks2025ProjectGallery from "@/resources/data/devHacksArchive/devHacks2025/ProjectGallery2025";
import redirectMappings from "@/resources/redirect-mappings";

import Contact from "./Contact";
import DevChamps from "./DevChamps";
import GitHub from "./Github";
import Hackathon from "./hackathon/Hackathon";
import HackathonArchive from "./hackathon/HackathonArchive";
import {
  hackathonInfoLoader,
  hackathonThemeLoader,
} from "./hackathon/hackathonLoader";
import HackathonSchedule from "./hackathon/HackathonSchedule";
import HackathonThemes from "./hackathon/HackathonThemes";
import Home from "./Home";
import LinkTree from "./LinkTree";
import RootLayout from "./layouts/RootLayout";
import PageNotFound from "./PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<ErrorBoundary />}>
      {Object.entries(redirectMappings).map(
        ([fromPath, toPath], redirectEntryInd) => (
          <Route
            key={redirectEntryInd}
            path={fromPath}
            element={<Navigate to={toPath} replace />}
          />
        )
      )}
      <Route index element={<Home />} />
      <Route path="/devchamps" element={<DevChamps />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/github-tutorial" element={<GitHub />} />
      <Route path="/link-tree" element={<LinkTree />} />
      <Route path="/devhacks" element={<Hackathon />} />
      <Route
        path="/devhacks/:year"
        element={<HackathonArchive />}
        loader={hackathonInfoLoader}
      />
      <Route
        path="/devhacks/:year/schedule"
        element={<HackathonSchedule />}
        loader={hackathonInfoLoader}
      />
      <Route
        path="/devhacks/:year/themes"
        element={<HackathonThemes />}
        loader={hackathonThemeLoader}
      />
      <Route
        path="/devhacks/2025/gallery"
        element={<DevHacks2025ProjectGallery />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
