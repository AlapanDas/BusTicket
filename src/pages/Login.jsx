import React, { useState } from 'react'
import Cookies from 'js-cookie';


async function authUser(username, password) {

}

export default function Auth() {
     const [loading, setLoading] = useState(false);
     const [response, setresponse] = useState({});

     const handleSubmit = async (e) => {
          e.preventDefault();
          const username = document.getElementById('userid').value;
          const password = document.getElementById('pswd').value;


          try {
               setLoading(true);
               await authUser(username, password);
               const url = 'https://busticket-backend-nestjs.onrender.com/login';
               try {
                    const response = await fetch(url, {
                         method: 'POST', 
                         headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                         },
                         body: JSON.stringify({ username, password }), 
                    });

                    if (!response.ok) {
                         // Handle HTTP errors
                         throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const data = await response.json();
                     console.log(data)
                    if (data.status) {
                         Cookies.set('auth_user', data.access_token);
                         Cookies.set('admin_user', data.isAdmin);
                    }
                    else {
                         alert("Wrong Username or Password");
                         // return response;
                    }
               } catch (error) {
                    console.error('Error logging in:', error); // Print errors to the console
                    return error;
               }

          }
           catch (error) {
          alert("Error in the Request")
          console.error(error);
     } finally {
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
