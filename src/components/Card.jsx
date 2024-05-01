import React from 'react'
import './card.css'
import MyModal from './Dialog'
export default function Card({ responseData }) {
     return (
          <>
               <div className=' card w-72 rounded-xl p-4 text-onsecondary m-2'>
                    <div className="type pb-4 font-mono flex justify-between">
                         <p>Public</p>
                         <span>
                              <button>
                                   {responseData && responseData.message !== "Bus Not Found" &&
                                        <MyModal stops={responseData.stops} />}
                                   {responseData.message === "Bus Not Found" &&
                                        <p>Error</p>}
                              </button>
                         </span>
                    </div>
                    <div className="heading pb-2 text-2xl font-semibold">{responseData.number}</div>
                    <div className="line flex text-lg font-normal  justify-between">
                         <p>{responseData.from}</p>
                         <p>{responseData.to}</p>
                    </div>
               </div>
          </>
     )
}
