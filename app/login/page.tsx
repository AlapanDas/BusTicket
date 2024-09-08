'use client'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Auth from '@/components/Login/index';
import { redirect } from 'next/navigation';

export default function App() {

  const [setlogin, updatelogin] = useState(false);
  useEffect(() => {
    const userCookie = Cookies.get('user_data');
    if (userCookie) {
      updatelogin(true);
    } else {
        updatelogin(false);
    }

  }, []);
  return (
    <div>
      {
        setlogin ?redirect('/'): <Auth />
      }
    </div>
  );
}
