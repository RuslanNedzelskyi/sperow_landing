import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n";
import logoLight from './assets/images/logo_light.svg';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <head>
      <meta charSet="utf-8" />
      <link rel="icon" href={logoLight} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sperow</title>
    </head>

    <App />
  </React.StrictMode>
);

reportWebVitals();
