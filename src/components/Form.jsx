import React from 'react'
import { useState } from 'react';
import Card from '../components/Card';

export default function Form() {
     const [responseData, setResponseData] = useState(null);
     let data;
     const work = async () => {
          const form = document.querySelector("form");
          const start = form.source.value;
          const end = form.dest.value;

          const url = `https://busticket-backend.onrender.com/buses`;
          const data = {
               "start": start,
               "end": end
          }

          try {
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
               let enddata = await response.json();
               console.log(enddata);
               setResponseData(enddata);

          } catch (error) {
               console.error('Error fetching data:', error.message);
          }

     };
     return (
          <>
               <form className="bg-secondary m-auto p-2 rounded-xl" onSubmit={work}>
                    <label htmlFor="places" className="block mb-2 text-sm text-center font-medium text-black dark:text-white">Select your Starting Point</label>
                    <select id="source" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                         <option>Jadavpur</option>
                         <option>Nilgaunj Depot</option>
                         <option>Sapoorji</option>
                         <option>Joka</option>
                         <option>Saltlake</option>
                         <option>Bantala It Park</option>
                         <option>Thakurpukur</option>
                         <option>Sinthi More</option>
                         <option>Santragachi</option>
                         <option>Rajchandrapur</option>
                         <option>Patuli</option>
                         <option>Dunlop</option>
                         <option>Howrah</option>
                         <option>Parnasree</option>
                         <option>New Town (Sector-V)</option>
                         <option>Eden City</option>
                         <option>Behala 14 No</option>
                         <option>Kundghat</option>
                         <option>Amtala</option>
                         <option>Santragachi</option>
                         <option>Rathtala</option>
                         <option>Garia</option>
                         <option>Golf Green</option>
                    </select>

                    <label htmlFor="places" className="block my-2 text-sm text-center font-medium text-black dark:text-white">Select your Destination</label>
                    <select id="dest" className=" w-44 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                         <option>Howrah</option>
                         <option>Airport</option>
                         <option>Ecospace</option>
                         <option>Kundghat</option>
                         <option>Barrackpore</option>
                         <option>Sapoorji</option>
                         <option>Baruipur</option>
                         <option>Karunamoyee</option>
                         <option>Belur</option>
                         <option>Bantala It Park</option>
                         <option>Patuli</option>
                         <option>Dakshineswar</option>
                         <option>Saltlake Gate</option>
                         <option>Nabanna</option>
                    </select>
                    <button onClick={work} type="button" className="mx-auto block my-2  border px-2 py-1 bg-secondary rounded-lg w-min text-white bg-blue-700">Fetch</button>
               </form>
               <div className='items-center  gap-2 rounded-2xl bg-opacity-40 backdrop-blur-sm  backdrop-brightness-75 bac text-onsecondary   '>

                    {responseData && (
                         <div className='flex justify-center flex-wrap'>{responseData.stops !== "NOTFOUND" &&
                              <Card responseData={responseData} />}
                         </div>
                    )}
               </div>


          </>

     )
}
