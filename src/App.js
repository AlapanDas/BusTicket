import './App.css';
import React, { createContext } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';

let UserInfo = {
  isLoggedIn: false,
  username: "",
  email: "",
  isAdmin: false,
}
export const User = createContext(UserInfo);
function App() {

  return (
    <>
      <User.Provider value={UserInfo}>
        <RouterProvider router={router} element={
          <>
            {/* Content will be displayed here... */}
          </>
        } />
      </User.Provider>
    </>
  );
}

export default App;
