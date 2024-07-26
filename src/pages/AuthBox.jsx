import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import Auth from '../components/auth';
import Header from '../components/Header';

export default function App() {

  const user = useSelector((state) => state.user);
  const [setlogin, updatelogin] = useState(false);
  let userObject;
  useEffect(() => {
    const userCookie = Cookies.get('user_data');

    // Searches for Cookie
    if (userCookie) {
      userObject = JSON.parse(userCookie);
      updatelogin(true);
    } else {
      // Cookie not Found then searches for Redux Info
      if (user.isLoggedIn)
        updatelogin(true)
      else
        //Cookie, Redux not found 
        updatelogin(false);
    }
  }, []);

  return (
    <div>
      <Header />
      {
        setlogin ?document.location.href='/' : <Auth />
      }

    </div>
  );
}
