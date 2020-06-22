import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Markdown from "./Markdown";
import "./index.css"
import Services from './Services/Services';
import TechnicalPause from './screens/TechnicalPause/TechnicalPause'
import { HashRouter } from 'react-router-dom'
import firebase from './global'
import Typeform from './screens/Typeform/Typeform';

function getScreen(values) {
    if(values[0]) {
      return <TechnicalPause/>
    }
    if(values[1] == 'true') {
      return <Typeform/>
    }
    return <App />
}

var us = null;
firebase.auth().onAuthStateChanged((user) => {
  us = user;
  Promise.all([Services.getTechnicalPauseStatus(), Services.getDemographicsSurvey(user)]).then((values) => {
    ReactDOM.render(
      <div>
          {getScreen(values)}
      </div>,
      document.getElementById('root')
    );  
  })
})

Promise.all([Services.getTechnicalPauseStatus(), Services.getDemographicsSurvey(us)]).then((values) => {
  ReactDOM.render(
    <div>
        {getScreen(values)}
    </div>,
    document.getElementById('root')
  );
})  

serviceWorker.unregister();
