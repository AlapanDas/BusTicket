'use client'
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Card from '@/components/Card';
import { propData } from '@/components/Card/data-type';
import HomePage from '@/components/Searchv2';
import { sendGAEvent } from '@next/third-parties/google'
import { sendGTMEvent } from '@next/third-parties/google'

type ResponseObject = {
  data: propData[];
}

const Page: React.FC = () => {
  const [responseData, setResponseData] = useState<ResponseObject | null>(null);

  useEffect(() => {
    sendGTMEvent({ event: "User Searched", value: "Search Page" });
    sendGAEvent({ event: "User Searched", value: "Search Page" })
    const cookieData = Cookie.get('busData');
    if (cookieData) {
      try {
        const parsedData: ResponseObject = JSON.parse(cookieData);
        setResponseData(parsedData);
      } catch (error) {
        console.error('Error parsing cookie data:', error);
        setResponseData(null);
      }
    }
  }, []);

  return (
    <>
      <div className='mx-auto my-4 px-4 gap-4'>
        <div className='w-full'>
          <HomePage />
        </div>
        <div className='flex items-center justify-center my-4'>
          <div className='items-center gap-2 rounded-2xl bg-opacity-40 backdrop-blur-sm backdrop-brightness-75 text-gray-800 p-4'>
            {responseData && responseData.data && responseData.data.length > 0 ? (
              responseData.data.map((bus) => (
                <Card key={bus._id} responseData={bus} />
              ))
            ) : (
              <p>Search for Buses by typing name or number</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
