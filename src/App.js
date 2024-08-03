import './App.css';
import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';


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
