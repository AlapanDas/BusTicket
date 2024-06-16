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
               {/* <img className=' -z-10 h-full fixed opacity-75 bottom-0 -left-10' src={bg} alt="" /> */}
               {/* <img className=' -z-10 h-80 fixed opacity-90 bottom-0 left-0' src={bus} alt="" /> */}
               {/* <div className='mx-auto my-60 gap-4 w-60 h-min  rounded border-onsecondary flex flex-col'>
                    <p className=' text-center hover:backdrop-blur-lg hover:font-medium rounded-xl p-3 bg-secondary shadow-xl ring-onsecondary'>
                         Welcome to Bus Ticket !!
                    </p>
                    <p className=' text-center hover:backdrop-blur-lg hover:font-medium rounded-xl p-3 bg-secondary shadow-xl ring-onsecondary'>
                         <Link to='/peppapig'>Search for Buses</Link>
                    </p>
                    <p className=' text-center hover:backdrop-blur-lg hover:font-medium rounded-xl p-3 bg-secondary shadow-xl ring-onsecondary'>
                         <Link to='/search-route'>Search for Buses by Route</Link>
                    </p>
                    <p className=' text-center hover:backdrop-blur-lg hover:font-medium rounded-xl p-3 bg-secondary shadow-xl ring-onsecondary'>
                         <Link to='/search-number'>Search for Buses by Number</Link>
                    </p>
                    <p className=' text-center hover:backdrop-blur-lg hover:font-medium rounded-xl p-3 bg-secondary shadow-xl ring-onsecondary'>
                         <Link to='/login'>Create an Account/ Login</Link>
                    </p>
               </div> */}

               <div className='relative -rotate-2 hover:shadow-xl transition-all hover:-rotate-0 m-4   shadow-2xl max-md:w-52 max-md:h-64  max-sm:w-48 max-sm:h-52 w-64 h-72 bottom-0 border rounded-3xl bg-secondary p-2  bg-gradient-to-tr from-black via-red-900 to-secondary'>
                    <div className='flex justify-between '>
                         <p className='font-poppins text-lg font-semibold items-center flex mx-2 text-white'>Search</p>
                         <div className='p-2 rounded-full bg-white'>
                              <img src={arrow} alt="" />
                         </div>
                    </div>
                    <img className='bottom-0 absolute left-0  h-32 ' src={bus} alt="" />
               </div>
               <div className="heading text-5xl max-md:text-4xl max-sm:text-3xl font-bold text-center">
                    <h1>Welcome to MyBusTicket</h1>
               </div>
               <div className='right-0 relative'>
                    <div className=' -rotate-2 absolute  hover:shadow-xl transition-all hover:-rotate-0 m-8 mb-20 max-md:w-52  shadow-2xl max-md:h-64 max-sm:w-48 max-sm:h-52 w-64 h-72 right-0 top-2 border rounded-3xl bg-secondary p-2  bg-gradient-to-br to-black via-red-900 from-secondary'>
                         <div className='flex justify-between '>
                              <div className='p-2 rounded-full bg-white'>
                                   <img className=' -rotate-90' src={arrow} alt="" />
                              </div>
                              <p className='font-poppins text-lg font-semibold items-center flex mx-2 text-white'>About</p>
                         </div>
                         <img className='bottom-0 m-2 absolute  h-32 ' src={about} alt="" />
                    </div>
               </div>
               <Footer />
          </>
     )
}
