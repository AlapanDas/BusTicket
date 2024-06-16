import React from 'react'
import logo from '../contents/logo.png'

export default function Footer() {
     return (
          <>

               <footer className=' text-sm bottom-0 absolute font-medium  bg-secondary  shadow-lg flex w-full justify-between'>
                    <div className='text-onsecondary flex space-x-1 '> <a href="https://www.algolia.com/">Search powered by Algolia </a><img className='h-6 bg-transparent' src={logo} alt="" /></div>
                    <div className='text-onsecondary '> <a href="https://www.alapandas.vercel.app">Created by Alapan Das</a></div>
               </footer>
          </>
     )
}
