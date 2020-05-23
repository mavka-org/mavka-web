import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './Root'

ReactDOM.render(
    <div>
        Mavka structure
        <Root/>
    </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
