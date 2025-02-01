import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const body = ReactDOM.createRoot(document.getElementById('body'));
body.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
