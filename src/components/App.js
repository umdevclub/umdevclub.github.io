import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import redirectMappings from "@/resources/redirect-mappings.js";

import PageNotFound from "@/components/PageNotFound.js";
import ComingSoon from "@/components/ComingSoon.js";
import DevChamp from "@/components/DevChamps.js";


function App() {
  
  return (
    <BrowserRouter>
      <Switch>

        { 
          Object.entries(redirectMappings).map(([fromPath, toPath]) =>
          (
            <Redirect from={fromPath} to={toPath}></Redirect>
          ))
        }

        <Route exact path="/">
          <ComingSoon />
        </Route>

        <Route path="/devchamps">
          <DevChamp />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
