async function authUser(username, password) {
     const url = 'https://busticket-backend-nestjs.onrender.com/login';

     let headers = new Headers();

     headers.append('Content-Type', 'application/json');
     headers.append('Access-Control-Allow-Origin', '*');
     const response = fetch(url, {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: headers,
          body: JSON.stringify({
               username: username,
               password: password,
          }),
          credentials: 'include',
     })
          .then((response) => response.json())
          .then((data) => {
               let user_data = data;
               return user_data;
          })
          .catch((error) => {
               console.error('Error:', error)
               return error;
          });
     return response;
}

module.exports = { authUser };