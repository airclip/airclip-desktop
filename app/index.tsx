import React from 'react';
import ReactDOM from 'react-dom';
import './app.global.css';
import AppWrapper from './components/AppWrapper';
import { isProd } from './utils';

if (isProd()) {
  window.addEventListener('beforeunload', ev => {
    ev.returnValue = true;
  });
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
