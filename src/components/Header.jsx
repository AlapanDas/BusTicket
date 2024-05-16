import React from 'react'

export default function Header() {
     return (
          <header className=" text-white flex bg-secondary z-50 shadow-sm top-0 border-b-onsecondary  searchbox backdrop-opacity-80 sticky justify-between items-center font-semibold font-sans p-3  ">
               <div className='text-2xl hover:text-secondary ' ><a href="/search">My Bus Ticket</a></div>
               <div>
                    <div className="form">
                         <button type='submit' className='text-xl font-normal z-50 '> <a href='/auth'>Login</a></button>
                         <div>
                         </div>
                    </div>
               </div>
          </header>
     )
}
