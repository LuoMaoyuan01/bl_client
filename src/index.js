// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// React strict mode disabled, rerendering of components twice is disabled
ReactDOM.render(
  // <React.StrictMode>
    <App />,
  document.getElementById('root')
);

