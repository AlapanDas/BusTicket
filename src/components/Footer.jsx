import React from 'react'

export default function Footer() {
     return (
          <>
               <footer className=' text-sm bottom-0 absolute  bg-secondary  shadow-lg flex w-full justify-between'>
                    <div className='text-onsecondary '> <a href="https://www.algolia.com/">Search powered by Algolia</a></div>
                    <div className='text-onsecondary'> <a href="https://www.alapandas.vercel.app">Created by Alapan Das</a></div>
               </footer>
          </>
     )
}
