import React from 'react'
import logo from '../contents/logo.png'

export default function Footer() {
     return (
          <>

               <footer className='backdrop-blur-lg backdrop-grayscale z-50 text-sm bottom-0 fixed  font-medium  shadow-lg flex w-full justify-between'>
                    <div className='max-md:text-md max-sm:text-xs text-onsecondary flex space-x-1 '> <a href="https://www.algolia.com/">Search powered by Algolia </a><img className='h-5 bg-transparent' src={logo} alt="" /></div>
                    <div className='max-md:text-md max-sm:text-xs text-onsecondary '> <a href="https://www.alapandas.vercel.app">Created by Alapan Das</a></div>
               </footer>
          </>
     )
}
