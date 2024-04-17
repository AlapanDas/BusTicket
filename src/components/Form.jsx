import React from 'react'

export default function Form() {
     return (
          <>
               <form className="max-w-sm mx-auto">
                    <label htmlFor="places" className="block mb-2 text-sm text-center font-medium text-black dark:text-white">Select your Starting Point</label>
                    <select id="source" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

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
               </form>
               <form className="max-w-sm mx-auto">
                    <label htmlFor="places" className="block mb-2 text-sm text-center font-medium text-black dark:text-white">Select your Destination</label>
                    <select id="dest" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

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
                         <option>Howrah</option>
                         <option>Nabanna</option>
                    </select>
               </form>



          </>

     )
}
