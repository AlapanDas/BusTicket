import './App.css';
import React from 'react';
import SearchN from './routes/searchNum'
import ErrorPage from './routes/error';
import AuthBox from './components/AuthBox';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Welcome from './routes/welcome';
import SimpleComponent from './components/Drop'
import SearchR from './routes/searchRoute';

const options = ['Option 1', 'Option 2', 'Another Option'];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search-route",
    element: <SearchR />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search-number",
    element: <SearchN />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <AuthBox />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/account",
    element: <AuthBox />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/peppapig",
    element: <SimpleComponent items={options} />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} element={
        <>
          {/* Content will be displayed here... */}
        </>
      } />
    </>
  );
}

export default App;
