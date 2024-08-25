const axios = require('axios');

// export async function authUser(username, password) {
//      const url = 'https://busticket-backend-nestjs.onrender.com/login';

//      try {
//           const response = await axios.post(
//                url,
//                {
//                     username: username,
//                     password: password
//                },
//                {
//                     headers: {
//                          'Content-Type': 'application/json',
//                          'Access-Control-Allow-Origin': '*',  // This header is actually not needed here; the server should set this
//                     },
//                     withCredentials: true, // This is equivalent to credentials: 'include' in fetch
//                }
//           );

//           const user_data = response.data;
//           console.log(user_data);
//           return user_data;

//      } catch (error) {
//           console.error('Error:', error.stackTrace());
//           return error;
//      }
// }
async function authUser(username, password) {
     const url = 'http://localhost:3030/login';
     // const url = 'https://busticket-backend-nestjs.onrender.com/login';
     console.log(username,password);
     
          const response = await fetch(url, {
               method: 'POST',
               mode: 'no-cors',
               headers: {
                    'Content-Type': 'application/json',
                    // Remove 'Access-Control-Allow-Origin' header here; it's not needed on the client side
               },
               credentials: 'include', // Include cookies if needed
               body: JSON.stringify({
                    username: username,
                    password: password,
               }),
          });

          if (!response.ok) {
               // If response is not ok, throw an error
               throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json(); // Parse the JSON response
          console.log(data); // Debugging: See the response data in the console
          return data;

}

module.exports = { authUser };


// module.exports = { authUser };