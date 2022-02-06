import "@/styles/App.scss";

import { useLocation, Redirect, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import redirectMappings from "@/resources/redirect-mappings.js";

import Header from "@/components/Header.js";

import Home from "@/components/Home.js";
import Events from "@/components/Events.js";
import DevChamp from "@/components/DevChamps.js";
import Contact from "@/components/Contact.js";

import PageNotFound from "@/components/PageNotFound.js";
import React from "react";
function App() {
  // The animation transitions out the current page first and then transitions into the new page
  // So we can have the pages be positioned as relative and not have to worry about making the
  // new page absolute (i.e. make the pages absolute).
  const routerTransitionDuration = 100;
  const location = useLocation();
  return (
    <>
      <Header />
      <div>
        <TransitionGroup className="navpage-container">
          <CSSTransition
            key={location.key}
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
              <Route path="/events" component={Events} />
              <Route path="/devchamps" component={DevChamp} />
              <Route path="/contact" component={Contact} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;
