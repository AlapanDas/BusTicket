import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Welcome() {
     return (
          <>
               <Header />
               <div className='mx-auto my-60 gap-4 w-56 h-min  rounded border-onsecondary flex flex-col'>
                    <p className=' text-center hover:font-medium rounded-xl p-3 bg-secondary shadow-xl ring-onsecondary'>
                         Welcome to Bus Ticket !!
                    </p>
                    <p className=' text-center hover:font-medium rounded-xl p-3 bg-secondary shadow-xl ring-onsecondary'>
                         <Link to='/search'>Search for Buses</Link>
                    </p>
                    <p className=' text-center hover:font-medium rounded-xl p-3 bg-secondary shadow-xl ring-onsecondary'>
                         <Link to='/login'>Create an Account/ Login</Link>
                    </p>
               </div>
          </>
     )
}
