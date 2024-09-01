'use client'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Auth from '@/components/Login/index';

export default function App() {

  const [setlogin, updatelogin] = useState(false);
  useEffect(() => {
    const userCookie = Cookies.get('user_data');

    // Searches for Cookie
    if (userCookie) {
      updatelogin(true);
    } else {
        updatelogin(false);
    }

  }, []);
  return (
    <div>
      {
        setlogin ?document.location.href='/' : <Auth />
      }
    </div>
  );
}
