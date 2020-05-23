import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ScreensAbout from "./screens/About";
import NotFound from "./screens/NotFound";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" children={()=><h2>Main</h2>}/>
            <Route path="/about" component={ScreensAbout}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);