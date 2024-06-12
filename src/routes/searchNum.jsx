import React from 'react'
import '../App.css';
import Form from '../components/FormNumber';
import Header from '../components/Header';

export default function SearchN() {
  return (
    <body className=''>
      <Header />
      <div className='flex flex-col items-center  gap-2 rounded-2xl text-onsecondary '>
        <Form />
      </div>
    </body>
  )
}
