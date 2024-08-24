import React from 'react';
import * as ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { Analytics } from "@vercel/analytics/react"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
    {/* <Analytics /> */}
  </React.StrictMode>
);

