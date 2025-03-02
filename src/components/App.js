import "@/styles/App.scss";

import { useLocation, Redirect, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import redirectMappings from "@/resources/redirect-mappings.js";

import Header from "@/components/Header.js";

import Home from "@/components/Home.js";
import DevChamp from "@/components/DevChamps.js";
import Contact from "@/components/Contact.js";
import Hackathon from "@/components/Hackathon.js";
import PageNotFound from "@/components/PageNotFound.js";
import React from "react";
import Footer from "./Footer";
import LinkTree from "@/components/LinkTree";
import DevhacksGithub from "@/components/DevhacksGithub";

import DevhacksSchedule2025 from "@/resources/data/devHacksArchive/devHacks2025/Schedule2025.js";
import PrizeCategories2025 from "@/resources/data/devHacksArchive/devHacks2025/PrizeCategories2025.js";
import ProjectGallery2025 from "@/resources/data/devHacksArchive/devHacks2025/ProjectGallery2025.js";

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
          >
            <Switch location={location}>
              {Object.entries(redirectMappings).map(
                ([fromPath, toPath], redirectEntryInd) => (
                  <Redirect
                    key={redirectEntryInd}
                    from={fromPath}
                    to={toPath}
                  ></Redirect>
                )
              )}
              <Route exact path="/" component={Home} />
              <Route path="/devchamps" component={DevChamp} />
              <Route path="/contact" component={Contact} />
              <Route path="/devhacks" component={Hackathon} />
              <Route exact path="/github-tutorial" component={DevhacksGithub} />
              <Route path="/link-tree" component={LinkTree} />
              <Route path="/schedule-2025" component={DevhacksSchedule2025} />
              <Route
                path="/prize-categories-2025"
                component={PrizeCategories2025}
              />
              <Route
                path="/project-gallery-2025"
                component={ProjectGallery2025}
              />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </>
  );
}

export default App;
