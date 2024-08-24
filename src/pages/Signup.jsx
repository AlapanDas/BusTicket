import { useState } from "react";
import React from 'react'
import Cookies from "js-cookie";
import Header from "../components/Header";

function Signup() {

     const [loading, setLoading] = useState(false);
     const handleSubmit = async (e) => {
          e.preventDefault();

          const username = document.getElementById('name').value;
          const password = document.getElementById('password').value;
          const email = document.getElementById('email').value;
          fetch('https://gearshift-backend.onrender.com/user/signin', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
               }),
               credentials: 'include',
          })
               .then((response) => response.json())
               .then((data) => {

                    let user_data = JSON.stringify(data);


                    if(user_data.status!=='false')
                         alert("Failed")
                    else
                         alert("Wrong Credentials",user_data.message);
                    window.location.href = '/'
               })
               .catch((error) => {

                    console.error('Error:', error)
               })
               .finally();



     };

     return (
          <>
               <Header />
               {loading ? (
                    <div className="loader z-50 text-xl my-52 mx-auto  text-center animate-spin">Loading...</div>
               ) : (
                    <div className='  w-min p-4  rounded-xl backdrop-blur-sm relative m-auto top-52  '>
                         <div className="inner text-center">
                              <h1 className='text-lg font-semibold md:text-start sm:text-center my-1'>Log In</h1>
                              <form onSubmit={handleSubmit}>
                                   <p className=' text-sm italic font-mono ' >UserID</p>
                                   <input autoComplete='current-password' id='name' type="text" className='italic shadow-xl border font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52 rounded-md' />
                                   <p className=' text-sm italic font-mono ' >Email</p>
                                   <input autoComplete='current-password' id='email' type="text" className='shadow-xl border italic font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52  rounded-md' />
                                   <p className=' text-sm italic font-mono ' >Password</p>
                                   <input autoComplete='current-password' id='password' type="password" className='shadow-xl border italic font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52  rounded-md' />
                                   <button type="submit" className='border border-onsecondary p-2 mx-auto mt-2 rounded-xl hover:bg-secondary '>Log In</button>
                              </form>
                              <h2>Have an account? Log in <a href="/login" className='text-red-800'>here</a></h2>
                         </div>
                    </div>
               )}
          </>
     )
}

export default Signup