import "@/styles/App.scss";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import redirectMappings from "@/resources/redirect-mappings.js";

import Header from "@/components/Header.js";

import Home from "@/components/Home.js";
import Events from "@/components/Events.js";
import DevChamp from "@/components/DevChamps.js";
import Contact from "@/components/Contact.js";

import PageNotFound from "@/components/PageNotFound.js";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="*" component={Header} />
      <div className="app-body">
        <Switch>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
