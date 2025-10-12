import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import './index.css';
import App from './App'; // 👇 This imports your App component

// This finds the <div id="root"> in your index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// This renders your entire app into that div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);