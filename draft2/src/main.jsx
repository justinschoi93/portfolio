import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './output.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.rennder(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
