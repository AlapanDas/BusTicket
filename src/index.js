import React from 'react';
import * as ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { AuthProvider } from './AuthContext';
import { Analytics } from "@vercel/analytics/react"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    <Analytics />
  </React.StrictMode>
);

