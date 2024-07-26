import React, { useContext, useState } from 'react'
import Cookies from 'js-cookie';

export default function Auth() {
     const [setlogin, updatelogin] = useState(false);
     const [loading, setLoading] = useState(false);

     const handleSubmit = async (e) => {
          e.preventDefault();
          const username = document.getElementById('userid').value;
          const password = document.getElementById('pswd').value;

          const url = 'https://gearshift-backend.onrender.com/user/login';
          // const url = 'https://busticket-backend.onrender.com/login';
          const data = {
               "username": username,
               "password": password
          }
          try {
               setLoading(true);
               const response = await fetch('https://gearshift-backend.onrender.com/user/login', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         username: username,
                         password: password,
                    }),
                    credentials: 'include',
               })
                    .then((response) => response.json())
                    .then((data) => {
                         console.log(data)
                         let user_data = data;
     
                         if (data.status)
                              updatelogin(true);
     
                         Cookies.set('user_data', JSON.stringify(user_data), { expires: 2 });
                         window.location.href="/";
                    })
                    .catch((error) => {
                         updatelogin(false);           
                         console.error('Error:', error)
                    });
          } catch (error) {
               alert("Error")
               Cookies.set('user-data',{'message':0})
               console.error(error);
          } finally {
               setLoading(false); 
               // window.location.href='/search';
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
                                   <input autoComplete='current-password' id='userid' type="text" className='italic shadow-xl border font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52 rounded-md' />
                                   <p className=' text-sm italic font-mono ' >Password</p>
                                   <input autoComplete='current-password' id='pswd' type="password" className='shadow-xl border italic font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52  rounded-md' />
                                   <button type="submit" className='border border-onsecondary p-2 mx-auto mt-2 rounded-xl hover:bg-secondary '>Log In</button>
                              </form>
                              <h2>Don't have an account? Sign up <a href="/signin" className='text-red-800'>here !!</a></h2>
                         </div>
                    </div>
               )}
          </>
     )
}
