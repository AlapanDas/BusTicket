import React from 'react'
import Link from 'next/link'
import Bubble from '@/components/Bubble'
import Footer from '@/components/Footer'
import bus from '@/public/bus.svg'
import about from '@/public/about.svg'
import arrow from '@/public/arrow.svg'


export default function Home() {
     return (
          <>
               <div className='relative '>
                    <div className='Image '>
                         <div className='fixed -z-10 max-lg:h-28  max-lg:w-28 lg:w-36 lg:h-36 xl:w-36 xl:h-36 right-72 -top-28'>
                              <Bubble />
                              {/* <img className='rounded-full mx-10 z-50  max-lg:h-28  max-lg:w-28 lg:w-36 lg:h-36 xl:w-36 xl:h-36' src="https://www.github.com/AlapanDas.png" alt="Logo" /> */}
                         </div>
                         <div className='fixed -z-10 max-lg:h-28  max-lg:w-28 lg:w-36 lg:h-36 xl:w-36 xl:h-36 top-1/2 -left-32 '>
                              <Bubble />

                         </div>
                    </div>
                    <div className=' xl:ml-20'>
                         <div className='relative -rotate-2 hover:shadow-xl transition-all hover:-rotate-0 m-4   shadow-2xl   max-sm:w-64 max-sm:h-72 w-64 h-72 bottom-0 border rounded-3xl bg-red-700 bg-opacity-40 p-2  backdrop-blur-sm border-secondary '>
                              <div className='flex justify-between '>
                                   <p className='font-poppins text-lg font-semibold items-center flex mx-2 text-primary'><Link href={'/search'}>Search</Link></p>
                                   <div className='p-2 rounded-full bg-white'>
                                        <Link href={'/search'}>
                                             <img src={arrow.src} alt="" />
                                        </Link>
                                   </div>
                              </div>
                              <img className='bottom-0 absolute left-0  h-32 ' src={bus.src} alt="" />
                         </div>
                    </div>
                    <div className="heading text-5xl max-md:text-4xl max-sm:text-3xl font-bold text-center py-8 max-sm:py-6 cursor-pointer  drop-shadow-2xl ">
                         <h1 className='drop-shadow-2xl'>Welcome to My
                              <span className='hover:text-secondary '>Bus</span>Ticket</h1>
                    </div>
                    <div className='right-0 absolute inset-y-full xl:mr-20 ' >
                         <div className=' -rotate-2 bottom-0  hover:shadow-xl transition-all hover:-rotate-0 mx-8 mb-8  shadow-2xl  max-sm:w-64 max-sm:h-72 w-64 h-72 right-0 -top-10 border rounded-3xl bg-red-700 bg-opacity-40 p-2  backdrop-blur-sm border-secondary '>
                              <div className='flex justify-between '>
                                   <div className='p-2 rounded-full bg-white'>
                                        <Link href={'/about'}>
                                             <img className=' -rotate-90' src={arrow.src} alt="" />
                                        </Link>
                                   </div>
                                   <p className='font-poppins text-lg font-semibold items-center flex mx-2 text-primary'><Link href={'/about'}>About</Link></p>
                              </div>
                              <img className='bottom-0 m-2 absolute  h-32 ' src={about.src} alt="" />
                         </div>
                    </div>
               </div>
               <Footer />
          </>
     )
}
