import { useState } from 'react';
import './App.css';
import Form from './components/Form';



function App() {
  var data;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const handleLoginClick = async (event) => {
    event.preventDefault();
    try {
      // Make a GET request to the specified URL
      const response = await fetch('https://busticket-backend.onrender.com/users?userId=alapan');
      console.log("Sent!!");

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      data = await response.json();

      // Set the response data in state
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    setIsLoggedIn(prevState => !prevState);
  };
  const work = async () => {
    const start = document.getElementById("source").value;
    const end = document.getElementById("dest").value;
    try {
      const response = await fetch(`https://busticket-backend.onrender.com/buses?start=${start}&end=${end}`);
      console.log("Sent Bus Request", start, end);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      data = await response.json();
      console.log(data);
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  return (
    <>
      <body className='bg-black w-full h-screen'>
        <header className=" text-white flex justify-around items-center  font-semibold font-sans p-4  ">
          <div className='text-2xl hover:text-primary '>My Bus Ticket</div>
          <div>
            <div className="form">
              <button type='submit' onClick={handleLoginClick} className=' border-0 text-lg rounded-lg px-2 py-1 hover:text-primary'>{isLoggedIn ? 'Log Out' : 'Sign In'}</button>
              <div>
                {isLoggedIn ? <i className="bi bi-person"></i> : ''}
              </div>
            </div>
          </div>
        </header>

        <div className=' flex flex-col items-center  gap-2 rounded-xl bg-opacity-40  bg-secondary backdrop:blur-3xl w-max mx-auto my-3 p-4  '>
          <Form />
          <button onClick={work} type="button" className=" w-min text-white bg-blue-700">Default</button>
        </div>
        <div className='text-primary max-w-max text-2xl flex font-semibold flex-col items-center align-centerr'>
          {responseData && (
            <div className='text-center w-min'>
              <p>Response Data:</p>

              <pre className='  text-primary'>Bus Number:{JSON.stringify(responseData.number)}</pre>
              <pre className='  text-primary'>Stops:{JSON.stringify(responseData.stops)}</pre>
            </div>
          )}
        </div>
      </body>


    </>
  );
}

export default App;
