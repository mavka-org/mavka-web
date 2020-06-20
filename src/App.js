import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ScreensAbout from "./screens/About";
import NotFound from "./screens/NotFound";
import TechnicalPause from "./screens/TechnicalPause/TechnicalPause.jsx";

import Login from "./screens//Login_Register_Menu/Login/Login"
import Home from "./screens/Home";
import Test from "./screens/Test";
import TestView from "./screens/ContentMakers/TestView";
import MainMenu from "./screens/MainMenu";
import Courses from "./screens/Courses"
import SurveyDemographics from "./screens/SurveyDemographics"
import SurveyFeedback from "./screens/SurveyFeedback"
import SurveyOpenEnded from "./screens/SurveyOpenEnded"
import LoadingScreen from "./screens/LoadingScreen"
import Register from "./screens/Login_Register_Menu/Register/Register";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" children={()=><h2>Main</h2>}/>
            <Route path="/about" component={ScreensAbout}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/home" component={Courses}/>
            <Route path="/surveydemographics" component={SurveyDemographics}/>
            <Route path="/surveyfeedback" component={SurveyFeedback}/>
            <Route path="/surveyopenended" component={SurveyOpenEnded}/>
            <Route path={"/loading"} component={LoadingScreen}/>
            <Route exact path="/subject/:id" component={MainMenu} />
            <Route exact path="/subject/:id/:mode/:testId" component={Test} />
            <Route exact path={"/preview/:id"} component={TestView}/>
            <Route exact path={"/404"} component={NotFound}/>
            <Route component={NotFound}/>

        </Switch>
    </Router>
);
