import React from 'react'
import './bubble.css'

export default function Bubble({ i_width, i_height }) {
  const width = i_width || 700;
  const height = i_height || 700;
  return (
    <>
      <div className='bubble w-[700px] h-[700px] max-md:w-[700px] max-md:h-[700px] max-sm:w-[500px] max-sm:h-[500px] max-xs:w-[200px] max-xs:h-[200px] '  ></div>
      <div></div>
    </>
  )
}
