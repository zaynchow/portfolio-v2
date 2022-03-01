import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {GlobalStyles, Typography} from "./styles";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


