import React, { useState } from 'react';
import Header from './Header';
import Auth from '../routes/auth';

export default function AuthBox() {
     const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem('userInfo')) || { userID: '', password: '' });
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     
     // Function to update user info after successful authentication
     const updateUser = (userID, password) => {
         setUserInfo({ userID, password });
         setIsLoggedIn(true);
         // Save user info in sessionStorage
         sessionStorage.setItem('userInfo', JSON.stringify({ userID, password }));
     };

    return (
        <div>
            <Header userInfo={userInfo} isLoggedIn={isLoggedIn} />
            <Auth updateUser={updateUser} />
        </div>
    );
}
