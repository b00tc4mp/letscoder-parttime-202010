import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './components/App';
import reportWebVitals from './vendor/reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
