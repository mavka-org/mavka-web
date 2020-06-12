import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ScreensAbout from "./screens/About";
import NotFound from "./screens/NotFound";

import Login from "./screens/Authentication_menu/Login"
import Home from "./screens/Home";
import Subject from './screens/Subject'
import Test from "./screens/Test";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" children={()=><h2>Main</h2>}/>
            <Route path="/about" component={ScreensAbout}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route exact path="/subject/:id" component={Subject} />
            <Route exact path="/subject/:id/test/:testId" component={Test} />

            <Route component={NotFound}/>
        </Switch>
    </Router>
);