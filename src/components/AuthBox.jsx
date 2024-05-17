import React, { useState } from 'react';

import Auth from '../routes/auth';
import Header from './Header';

export default function App() {
    const [loginInfo, setloginInfo] = useState({ "username": null, "isAdmin": false });

    return (
        <div>
            <Header/>
            <Auth setloginInfo={setloginInfo} />
        </div>
    );
}
