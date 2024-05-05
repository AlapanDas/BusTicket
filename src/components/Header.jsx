import React from 'react';

export default function Header({ userInfo, isLoggedIn }) {
    return (
        <header className="text-white flex searchbox backdrop-opacity-80 sticky justify-around items-center font-semibold font-sans p-3">
            <div className='text-2xl hover:text-secondary'><a href="/">My Bus Ticket</a></div>
            <div>
                {isLoggedIn ? (
                    <div className="user-info flex gap-1">
                        <p className='font-normal '>Welcome</p>
                        <p className='font-sans text-md'>{userInfo.userID}</p>
                    </div>
                ) : (
                    <div className="form">
                        <button type='submit' className='text-xl font-normal z-50'><a href='/auth'>Login/Sign In</a></button>
                    </div>
                )}
            </div>
        </header>
    );
}
