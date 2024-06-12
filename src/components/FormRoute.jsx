import React from 'react'
import { useState } from 'react';
import Card from './Card';
import data from '../contents/from_to.json';
import number from '../contents/number.json';

export default function Form() {
     const [responseData, setResponseData] = useState(null);
     const [loading, setLoading] = useState(false);
     const work = async () => {
          const form = document.querySelector("form");
          const start = form.source.value;
          const end = form.dest.value;

          // const url = `http://localhost:3001/buses`;
          const url = `https://busticket-backend.onrender.com/buses`;
          const data = {
               "start": start,
               "end": end
          }

          try {
               setLoading(true);
               const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                         'Content-Type': 'application/json',
                    },
               });

               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }
               if(response.status===404)
                    alert("BUS NOT FOUND")
               let enddata = await response.json();
               
               if (enddata.message === "Buses not found")
                    setResponseData({ message: "Buses not found" });
               else
                    setResponseData(enddata);

          } catch (error) {
               console.error('Error fetching data:', error.message);
          } finally {
               setLoading(false)
          }

     };
     return (
          <>
               {loading ? (
                    <div className="loader z-50 max-sm:text-xl max-md:text-3xl max-lg:text-6xl my-52 animate-spin ">Loading...</div>
               ) : (
                    <div className='searchbox flex flex-col items-center  gap-2 rounded-2xl bg-opacity-40 shadow-xl  text-onsecondary  drop-shadow-lg backdrop-blur-lg w-min mx-auto my-3 p-4  '>

                         <form className=" m-auto p-2 rounded-xl" onSubmit={work}>
                              <label htmlFor="places" className="block mb-2 text-sm text-center font-medium text-black dark:text-white">Select your Starting Point</label>
                              <select id="source" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                   {data.from.map((option, index) => (
                                        <option key={index}>{option}</option>
                                   ))}
                              </select>

                              <label htmlFor="places" className="block my-2 text-sm text-center font-medium text-black dark:text-white">Select your Destination</label>
                              <select id="dest" className=" w-44 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                   {data.to.map((option, index) => (
                                        <option key={index}>{option}</option>
                                   ))}
                              </select>
                              <button onClick={work} type="button" className="mx-auto block my-2  border px-2 py-1 bg-secondary rounded-lg w-min text-white bg-blue-700">Fetch</button>
                         </form>
                         <div className='items-center  gap-2 rounded-2xl bg-opacity-40 backdrop-blur-sm  backdrop-brightness-75 bac text-onsecondary   '>

                              {responseData && responseData.length > 0 && (
                                   <div className='flex justify-center flex-wrap flex-col'>
                                        {responseData.message === "Buses not found" ? (
                                             <p>{responseData.message}</p>
                                        ) : (
                                             responseData.map((busData, index) => (
                                                  <Card key={index} responseData={busData} />
                                             ))
                                        )}
                                   </div>
                              )}
                         </div>
                    </div>
               )}
          </>

     )
}
