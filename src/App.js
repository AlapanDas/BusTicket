import './App.css';
import React from 'react';
import Search from './routes/search'
import ErrorPage from './routes/error';
import AuthBox from './components/AuthBox';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Welcome from './routes/welcome';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search />,
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
