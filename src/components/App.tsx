import "@/styles/App.scss";

import { useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Contact from "@/routes/Contact";
import DevChamps from "@/routes/DevChamps";
import DevhacksGithub from "@/routes/Github";
import Hackathon from "@/routes/Hackathon";
import Home from "@/routes/Home.js";
import LinkTree from "@/routes/LinkTree";
import PageNotFound from "@/routes/PageNotFound";

import Devhacks2024 from "@/resources/data/devHacksArchive/devHacks2024/devHacks2024";
import DevhacksSchedule2024 from "@/resources/data/devHacksArchive/devHacks2024/Schedule2024";
import Devhacks2025 from "@/resources/data/devHacksArchive/devHacks2025/devHacks2025";
import PrizeCategories2024 from "@/resources/data/devHacksArchive/devHacks2024/PrizeCategories2024";
import PrizeCategories2025 from "@/resources/data/devHacksArchive/devHacks2025/PrizeCategories2025";
import ProjectGallery2025 from "@/resources/data/devHacksArchive/devHacks2025/ProjectGallery2025";
import DevhacksSchedule2025 from "@/resources/data/devHacksArchive/devHacks2025/Schedule2025";
import redirectMappings from "@/resources/redirect-mappings";

function App() {
  // The animation transitions out the current page first and then transitions into the new page
  // So we can have the pages be positioned as relative and not have to worry about making the
  // new page absolute (i.e. make the pages absolute).
  const routerTransitionDuration = 300;
  const location = useLocation();

  // Create a custom key that changes only when the pathname or search parameters change (not when the hash changes).
  // This prevents the transition animation from triggering when the hash changes, leading to a re-render of the same page.
  const { pathname, search } = location;
  const transitionKey = pathname + search;

  const nodeRef = useRef(null); // Avoid using findDOMNode in TransitionGroup

  return (
    <>
      <Header />
      <main>
        <TransitionGroup className="navpage-container">
          <CSSTransition
            key={transitionKey}
            timeout={{
              exit: routerTransitionDuration,
              enter: 2 * routerTransitionDuration,
            }}
            classNames="fade"
            appear
            nodeRef={nodeRef}
          >
            <Routes location={location}>
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
              <Route path="/devhacks" element={<Hackathon />} />
              <Route path="/github-tutorial" element={<DevhacksGithub />} />
              <Route path="/link-tree" element={<LinkTree />} />
              <Route path="/schedule-2025" element={<DevhacksSchedule2025 />} />
              <Route path="/schedule-2024" element={<DevhacksSchedule2024 />} />

              <Route path="/devHacks2025" element={<Devhacks2025 />} />
              <Route path="/devHacks2024" element={<Devhacks2024 />} />
              <Route
                path="/prize-categories-2025"
                element={<PrizeCategories2025 />}
              />
              <Route
                path="/prize-categories-2024"
                element={<PrizeCategories2024 />}
              />
              <Route
                path="/project-gallery-2025"
                element={<ProjectGallery2025 />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </>
  );
}

export default App;
