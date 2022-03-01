import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {GlobalStyles, Typography} from "./styles";




ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


