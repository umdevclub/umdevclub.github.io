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
import PageNotFound from "@/components/PageNotFound.js";
import React from "react";
import Footer from "./Footer";
import HackathonSubmit from "@/components/HackathonSubmit";
import LinkTree from "@/components/LinkTree";

function App() {
  // The animation transitions out the current page first and then transitions into the new page
  // So we can have the pages be positioned as relative and not have to worry about making the
  // new page absolute (i.e. make the pages absolute).
  const routerTransitionDuration = 300;
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
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
              <Route path="/devchamps" component={DevChamp} />
              <Route path="/contact" component={Contact} />
              <Route path="/examcram-forms" component={ExamCramForms} />
              <Route path="/devhacks" component={Hackathon} />
              <Route path="/hackathon-register" component={HackathonRegister} />
              <Route path="/hackathon-submit" component={HackathonSubmit} />
              <Route path="/bbq" component={Picnic} />
              <Route path="/link-tree" component={LinkTree} />
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
