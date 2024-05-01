import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';


function App() {
  var data;
  const [isLoggedIn] = useState();
  const [responseData, setResponseData] = useState(null);

  const work = async () => {
    const start = document.getElementById("source").value;
    const end = document.getElementById("dest").value;
    try {
      const response = await fetch(`https:/busticket-backend.onrender.com/buses?start=${start}&end=${end}`);


      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      data = await response.json();
      
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <>
      <body className=' w-full h-screen'>
        <header className=" text-white flex  searchbox backdrop-opacity-80 sticky justify-around items-center font-semibold font-sans p-3  ">
          <div className='text-2xl hover:text-secondary '>My Bus Ticket</div>
          <div>
            <div className="form">
              <button type='submit'  className='text-xl font-normal z-50 '> <a href='/auth'>Login/Sign In</a></button>
              <div>
                
              </div>
            </div>
          </div>
        </header>

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
