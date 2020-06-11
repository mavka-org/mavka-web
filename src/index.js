import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './Root';

const MathJax = require('react-mathjax');


ReactDOM.render(
        <div>
            <Root/>
        </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
