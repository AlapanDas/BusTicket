import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import acc from '../contents/acc.svg'

export default function Header() {
     const { loginInfo } = useContext(AuthContext);
     const handlelogout =()=>{
          loginInfo.username=null;
          loginInfo.isAdmin=false;
          window.location.href='/';
          console.log(loginInfo);
     }
     return (
          <header className=" top-0  text-white flex bg-secondary z-50 shadow-lg border-b-onsecondary  searchbox backdrop-opacity-80 sticky justify-between items-center font-semibold font-sans p-3  ">
               <div className='text-2xl hover:text-ontertiary ' >
                    <Link to="/search">My Bus Ticket</Link>
               </div>
               <div className=''>
                    <div className="">
                         {loginInfo.username ?
                              <span className='flex gap-1'>
                                   <Popover className="relative">
                                        <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 px-2 border-none">
                                             <img src={acc} width={'30px'} alt='don"t care' />
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
                                                  <div className=" max-w-sm bg-secondary flex-auto overflow-hidden rounded-xl text-sm leading-6 shadow-lg ring-1 ring-onsecondary">
                                                       <div>
                                                            <div className="group relative flex flex-wrap gap-x-6 rounded-lg hover:bg-gray-50">
                                                                 <div className='flex justify-center p-2 gap-4 items-center'>
                                                                      <a href='/' className="font-semibold text-gray-900 text-lg">
                                                                           <p>
                                                                                {loginInfo.username}
                                                                           </p>
                                                                      </a>
                                                                      <button onClick={handlelogout}>
                                                                           <p className="font-normal text-gray-600">Logout</p>
                                                                      </button>
                                                                 </div>
                                                            </div>

                                                       </div>
                                                  </div>
                                             </Popover.Panel>
                                        </Transition>
                                   </Popover>
                              </span>
                              : <button type='submit' className='text-xl font-normal z-50 '> <Link to='/login'>Login</Link></button>}
                         <div>
                         </div>
                    </div>
               </div>
          </header>
     )
}
