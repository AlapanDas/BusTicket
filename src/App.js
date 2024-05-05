import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Header from './components/Header';
import userInfo from './components/AuthBox'
import isLoggedIn from './components/AuthBox'

function App() {

  var data;
  const [responseData, setResponseData] = useState(null);

  const work = async () => {
    const start = document.getElementById("source").value;
    const end = document.getElementById("dest").value;
    try {
      const response = await fetch(`https://busticket-backend.onrender.com/buses?start=${start}&end=${end}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      data = await response.json();

    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    setResponseData(data);
  };

  return (
    <>
      <body className=' w-full h-screen'>

        <Header userInfo={userInfo} isLoggedIn={isLoggedIn} />
        <div className='searchbox flex flex-col items-center  gap-2 rounded-2xl bg-opacity-40 backdrop-blur-sm  backdrop-brightness-75 bac text-onsecondary  bg-secondary  w-max mx-auto my-3 p-4  '>
          <Form />
          <button onClick={work} type="button" className="  border p-2 rounded-lg w-min text-white bg-blue-700">Default</button>
        </div>

        {responseData && (
          <div className='flex justify-center flex-wrap'>{responseData.stops !== "NOTFOUND" &&
            <Card responseData={responseData} />}
          </div>
        )}
      </body>



    </>
  );
}

export default App;
