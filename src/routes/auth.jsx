import React, { useContext, useState } from 'react'
import AuthContext from '../AuthContext';

export default function Auth({ setloginInfo }) {
     const { setLoginInfo } = useContext(AuthContext);
     const [loading, setLoading] = useState(false);

     const handleSubmit = async (e) => {
          e.preventDefault();
          const username = document.getElementById('userid').value;
          const password = document.getElementById('pswd').value;

          // const url = 'http://localhost:3001/login';
          const url = 'https://busticket-backend.onrender.com/login';
          const data = {
               "username": username,
               "password": password
          }
          try {
               setLoading(true);
               const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                         'Content-Type': 'application/json',
                    },
               });
               // alert("Success!!")
               if (response.status === 200) {
                    const data = (await response.json());
                    setLoginInfo({ username: data.username, isAdmin: data.isAdmin });

               }


          } catch (error) {
               alert("Error")
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
                              <h1 className='text-lg font-semibold md:text-start sm:text-center my-1'>Sign In</h1>
                              <p className='font-normal text-md font-mono text-start max-sm:text-xs'>Please fill the necessary details</p>
                              <form onSubmit={handleSubmit}>
                                   <p className=' text-sm italic font-mono' >UserID</p>
                                   <input autoComplete='current-password' id='userid' type="text" className='italic font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52 rounded-md' />
                                   <p className=' text-sm italic font-mono' >Password</p>
                                   <input autoComplete='current-password' id='pswd' type="password" className='italic font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52  rounded-md' />
                                   <button type="submit" className='border border-onsecondary p-2 mx-auto mt-2 rounded-xl hover:bg-secondary '>Sign In</button>
                              </form>
                         </div>
                    </div>
               )}
          </>
     )
}
