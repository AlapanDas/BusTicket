import React, { useState } from 'react';

export default function Auth({ updateUser }) {
     const [userID, setUserID] = useState();
     const [password, setPassword] = useState();

     const handleSubmit = async (e) => {
          e.preventDefault();
          const userid = document.getElementById('id').value;
          const userpswd = document.getElementById('pswd').value;
          try {
               const response = await fetch(`https://busticket-backend.onrender.com/users?userid=${userid}&key=${userpswd}`);
               if (response.ok) {
                    updateUser(userID, password);      
                    console.log(userID,password);// Update user info
               } else {
                    console.error('Authentication failed');
               }
          } catch (error) {
               console.error('Error:', error);
          }
     };

     return (
          <>
               <div className='  w-min p-4  rounded-xl backdrop-blur-sm relative m-auto top-52  '>
                    <div className="inner text-center">
                         <h1 className='text-lg font-semibold md:text-start sm:text-center my-1'>Sign In</h1>
                         <p className='font-normal text-md font-mono text-start max-sm:text-xs'>Please fill the necessary details</p>
                         <form onSubmit={handleSubmit}> {/* Use onSubmit instead of action and method */}
                              <p className=' text-sm italic font-mono' >UserID</p>
                              <input id='id' type="text" className='italic font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52 rounded-md' onChange={(e) => setUserID(e.target.value)} />
                              {/* Remove email input as it is not used */}
                              <p className=' text-sm italic font-mono' >Password</p>
                              <input id='pswd' type="password" className='italic font-semibold m-1 px-1 py-1 lg:w-72 md:w-60 sm:w-52  rounded-md' onChange={(e) => setPassword(e.target.value)} />
                              <button type="submit" className='border border-onsecondary p-2 mx-auto mt-2 rounded-xl hover:bg-secondary '>Sign In</button>
                         </form>
                    </div>
               </div>
          </>
     );
}
