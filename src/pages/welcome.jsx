import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import bus from '../contents/bus.svg'
import bg from '../contents/bg.svg'
import about from '../contents/about.svg'
import arrow from '../contents/arrow.svg'

export default function Welcome() {
     return (
          <>
               <Header />
               <div className='relative h-min'>
                    <div>
                         <div className='relative -rotate-2 hover:shadow-xl transition-all hover:-rotate-0 m-4   shadow-2xl   max-sm:w-64 max-sm:h-72 w-64 h-72 bottom-0 border rounded-3xl bg-secondary p-2  bg-gradient-to-tr from-black via-red-900 to-secondary'>
                              <div className='flex justify-between '>
                                   <p className='font-poppins text-lg font-semibold items-center flex mx-2 text-white'>Search</p>
                                   <div className='p-2 rounded-full bg-white'>
                                        <Link to={'/search'}>
                                             <img src={arrow} alt="" />
                                        </Link>
                                   </div>
                              </div>
                              <img className='bottom-0 absolute left-0  h-32 ' src={bus} alt="" />
                         </div>
                    </div>
                    <div className="heading text-5xl max-md:text-4xl max-sm:text-3xl font-bold text-center py-28 max-sm:py-20 cursor-pointe">
                         <h1>Welcome to My
                              <span className='hover:text-secondary  r'>Bus</span>Ticket</h1>
                    </div>
                    <div className='right-0 absolute inset-y-full' >
                         <div className=' -rotate-2 bottom-0  hover:shadow-xl transition-all hover:-rotate-0 m-8 mb-20  shadow-2xl  max-sm:w-64 max-sm:h-72 w-64 h-72 right-0 top-2 border rounded-3xl bg-secondary p-2  bg-gradient-to-br to-black via-red-900 from-secondary'>
                              <div className='flex justify-between '>
                                   <div className='p-2 rounded-full bg-white'>
                                        <Link to={'/about'}>
                                             <img className=' -rotate-90' src={arrow} alt="" />
                                        </Link>
                                   </div>
                                   <p className='font-poppins text-lg font-semibold items-center flex mx-2 text-white'>About</p>
                              </div>
                              <img className='bottom-0 m-2 absolute  h-32 ' src={about} alt="" />
                         </div>
                    </div>
               </div>
               <Footer />
          </>
     )
}
