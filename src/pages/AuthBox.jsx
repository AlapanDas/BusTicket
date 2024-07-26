import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Auth from '../components/auth';
import Header from '../components/Header';

export default function App() {

  const [setlogin, updatelogin] = useState(false);
  let userObject;
  useEffect(() => {
    const userCookie = Cookies.get('user_data');

    // Searches for Cookie
    if (userCookie) {
      userObject = JSON.parse(userCookie);
      updatelogin(true);
    } else {
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
