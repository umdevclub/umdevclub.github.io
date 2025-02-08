import "@/styles/App.scss";

import { useLocation, Redirect, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import redirectMappings from "@/resources/redirect-mappings.js";

import Header from "@/components/Header.js";

import Home from "@/components/Home.js";
import DevChamp from "@/components/DevChamps.js";
import Contact from "@/components/Contact.js";
import ExamCramForms from "@/components/ExamCramForms.js";
import Hackathon from "@/components/Hackathon.js";
import HackathonRegister from "@/components/HackathonRegister.js";
import Picnic from "@/components/Picnic.js";
import AreWeThereYet from "@/components/AreWeThereYet.js";
import PageNotFound from "@/components/PageNotFound.js";
import React from "react";
import Footer from "./Footer";
import HackathonSubmit from "@/components/HackathonSubmit";
import LinkTree from "@/components/LinkTree";
import DevhacksGithub from "@/components/DevhacksGithub";
import DevhacksSchedule from "@/components/DevhacksSchedule";
import PrizeCategories from "@/components/PrizeCategories";
import devHacksTeamRegistration from "@/components/devHacksTeamRegistration.js";
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
              <Route path="/examcram-forms" component={ExamCramForms} />
              <Route path="/devhacks" component={Hackathon} />
              <Route exact path="/github-tutorial" component={DevhacksGithub} />
              <Route path="/hackathon-submit" component={HackathonSubmit} />
              <Route path="/bbq" component={Picnic} />
              <Route path="/AreWeThereYet" component={AreWeThereYet} />
              <Route path="/link-tree" component={LinkTree} />
              <Route path="/registration" component={HackathonRegister} />
              <Route path="/schedule" component={DevhacksSchedule} />
              <Route path="/prize-categories" component={PrizeCategories} />
              <Route
                path="/team-registration"
                component={devHacksTeamRegistration}
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
