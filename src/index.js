import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Markdown from "./Markdown";
import "./index.css"
import Services from './Services/Services';
import TechnicalPause from './screens/TechnicalPause/TechnicalPause'

Services.getTechnicalPauseStatus().then((pause) => {
    ReactDOM.render(
        <div>
              {pause ? <TechnicalPause /> : <App />}
        </div>,
      document.getElementById('root')
    );
})

serviceWorker.unregister();
