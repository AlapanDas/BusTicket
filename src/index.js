import React from 'react';
import * as ReactDOM from "react-dom/client";
import './index.css';
import ErrorPage from './routes/error';
import App from './App';
import AuthBox from './components/AuthBox';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <App />,
    errorElement: <ErrorPage />,
    ErrorBoundary: <ErrorPage />
  },
  {
    path: "/api",
    element: <AuthBox />,
    errorElement: <ErrorPage />,
    ErrorBoundary: <ErrorPage />
  },
  {
    path: "/auth",
    element: <AuthBox />,
    errorElement: <ErrorPage />,
    ErrorBoundary: <ErrorPage />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Header />
    <RouterProvider router={router} element={

      <App />

    } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
