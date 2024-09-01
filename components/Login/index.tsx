import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { UserLogin } from './data-type';

export default function Auth() {
     const [loading, setLoading] = useState(false);
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const handleSubmit = async (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          const userData: UserLogin = { username, password };
          try {
               const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
               });

               const data = await response.json();


               if (response.ok) {
                    Cookies.set(process.env.AUTH_COOKIE as string, data.access_token);
                    Cookies.set(process.env.ADMIN_COOKIE as string, data.isAdmin);
               }
          } catch (error) {
               alert('An error occurred. Please try again.');
          }
          finally {
               setLoading(false);
               window.location.href = '/search';
          }
     };


     return (
          <>
               {loading ? (
                    <div className="loader z-50 text-xl my-52 mx-auto  text-center animate-spin">Loading...</div>
               ) : (
                    <div className='  w-min p-4  rounded-xl backdrop-blur-sm relative m-auto top-52  '>
                         <div className="inner text-center">
                              <h1 className='text-lg font-semibold md:text-start sm:text-center my-1'>Log In</h1>
                              <form onSubmit={handleSubmit}>
                                   <p className=' text-sm italic font-mono ' >UserID</p>
                                   <input autoComplete='current-password' id='userid' type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='italic shadow-xl border font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52 rounded-md' />
                                   <p className=' text-sm italic font-mono ' >Password</p>
                                   <input autoComplete='current-password' id='pswd' type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='shadow-xl border italic font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52  rounded-md' />
                                   <button type="submit" className='border border-onsecondary p-2 mx-auto mt-2 rounded-xl hover:bg-secondary '>Log In</button>
                              </form>
                              <h2>Don't have an account? Sign up <a href="/signin" className='text-red-800'>here !!</a></h2>
                         </div>
                    </div>
               )}
          </>
     )
}
