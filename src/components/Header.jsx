import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import Cookies from 'js-cookie';
import ham from '../contents/ham.svg'
import offline from '../contents/offline.svg'
import logo from '../contents/profile-circle.svg'

export default function Header() {
  const userInfo = { "username": null }
  const loginInfo = userInfo || Cookies.get('user-data');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handlelogout = () => {
    Cookies.remove('user-data');
  }
  return (
    // <header className=" top-0  flex bg-secondary z-50 shadow-lg border-b-onsecondary  searchbox backdrop-opacity-80 sticky justify-between items-center font-semibold font-sans p-3  ">
    //      <div className='text-2xl hover:text-ontertiary ' >
    //           <Link to="/">My Bus Ticket</Link>
    //      </div>
    //      <div >
    //           <div >
    //                {loginInfo.username ?
    //                     <span className='flex gap-1'>
    //                          <Popover className="relative">
    //                               <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 px-2 border-none">
    //                                    <img src={acc} width={'30px'} alt='don"t care' />
    //                               </Popover.Button>

    //                               <Transition
    //                                    as={Fragment}
    //                                    enter="transition ease-out duration-200"
    //                                    enterFrom="opacity-0 translate-y-1"
    //                                    enterTo="opacity-100 translate-y-0"
    //                                    leave="transition ease-in duration-150"
    //                                    leaveFrom="opacity-100 translate-y-0"
    //                                    leaveTo="opacity-0 translate-y-1"
    //                               >

    //                                    <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-max ">
    //                                         <div className=" max-w-sm bg-secondary flex-auto overflow-hidden rounded-xl text-sm leading-6 shadow-lg ring-1 ring-onsecondary">
    //                                              <div>
    //                                                   <div className="group relative flex flex-wrap gap-x-6 rounded-lg hover:bg-gray-50">
    //                                                        <div className='flex justify-center p-2 gap-4 items-center'>
    //                                                             <a href='/' className="font-semibold text-gray-900 text-lg">
    //                                                                  <p>
    //                                                                       {loginInfo.username}
    //                                                                  </p>
    //                                                             </a>
    //                                                             <button onClick={handlelogout}>
    //                                                                  <p className="font-normal text-gray-600">Logout</p>
    //                                                             </button>
    //                                                        </div>
    //                                                   </div>

    //                                              </div>
    //                                         </div>
    //                                    </Popover.Panel>
    //                               </Transition>
    //                          </Popover>
    //                     </span>
    //                     : <button type='submit' className='text-xl font-normal z-50 '> <Link to='/login'>Login</Link></button>}
    //                <div>
    //                </div>
    //           </div>
    //      </div>
    // </header>
    <header className=" backdrop-blur-lg backdrop-grayscale mb-1 top-0 sticky z-50 flex justify-between p-1 font-poppins bg-tertiar">
      <div className="bg-primary p-2 rounded-full text-white flex align-baseline">
        <Link to="/" className="flex items-center p-2">MyBusTicket</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleSidebar} className="text-black transition-all delay-200 duration-200 ease-in-out">
          {/* hamburger icon */}
          <img src={ham} alt="" className='h-10' />
        </button>
      </div>
      <div className="hidden md:flex bg-primary p-2 rounded-full text-white mx-2">
        <ol className="flex list-none gap-12 m-2">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/about">About</Link>
        </ol>
      </div>
      <div className="text-white bg-black rounded-full flex items-center px-2">
        <Link className="h-10 flex " to="/">
          {/* account icon */}
          {!loginInfo.username ? 
          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900  border-none">
              <img src={logo} className='h-10' alt='don"t care' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

              <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-max ">
                <div className=" max-w-sm bg-black flex-auto overflow-hidden rounded-xl text-sm leading-6 shadow-lg ring-1 ring-onsecondary">
                  <div>
                    <div className="group relative flex flex-wrap gap-x-6 rounded-lg ">
                      <div className='flex justify-center p-2 gap-4 items-center'>
                        <a href='/' className="font-semibold text-white text-lg">
                          <p>
                            {loginInfo.username||'user'}
                          </p>
                        </a>
                        <button onClick={handlelogout}>
                          <p className="font-normal text-white text-lg hover:text-secondary">Logout</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> : <img className=' bg-white invert' src={offline} alt="" />}

        </Link>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm flex flex-col items-center justify-center z-50 md:hidden font-poppins ">
          <button onClick={toggleSidebar} className="text-white absolute top-4 right-4 transition-all duration-300 ">
            <svg width="30" height="30" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <ol className="flex flex-col gap-6 text-white text-2xl font-poppins text-center font-semibold ">
            <Link to="/" onClick={toggleSidebar} className='hover:text-secondary'>Home</Link>
            <Link to="/search" onClick={toggleSidebar} className='hover:text-secondary'>Search</Link>
            <Link to="/about" onClick={toggleSidebar} className='hover:text-secondary'>About</Link>
          </ol>
        </div>
      )}
    </header>
  )
}
