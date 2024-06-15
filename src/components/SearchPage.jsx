import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import Cookie from 'js-cookie';
import Card from './Card';

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const cook = Cookie.get('busData');
    if (cook) {
      try {
        const parsedData = JSON.parse(cook);
        setResponseData(parsedData);
      } catch (error) {
        console.error('Error parsing cookie data:', error);
        setResponseData(null);
      }
    }
  }, []);

  return (
    <div className='mx-auto my-4 w-min gap-4 '>
      <Search />
      <div className='flex items-center justify-center my-4'>
        <div className='items-center gap-2 rounded-2xl bg-opacity-40 backdrop-blur-sm backdrop-brightness-75 bg-gray-200 text-gray-800 p-4'>
          {responseData && responseData.data && responseData.data.length > 0 ? (
            responseData.data.map((bus) => (
              <Card key={bus._id} responseData={bus} />
            ))
          ) : (
            <p>No buses found or error occurred.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
