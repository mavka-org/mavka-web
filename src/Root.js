import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ScreensAbout from "./screens/About";
import NotFound from "./screens/NotFound";
import PageViewer from "./screens/Authentication_menu/PageViewer";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" children={()=><h2>Main</h2>}/>
            <Route path="/about" component={ScreensAbout}/>
            <Route path="/auth" component={PageViewer}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);