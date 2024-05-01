import {
     Popover,
     PopoverHandler,
     PopoverContent,
     Button,
     Input,
     Typography,
} from "@material-tailwind/react";
import { useState } from 'react';

export default function AuthBox() {
     var data,id,pass;
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     async function authenticate() {
          try {
                id = document.getElementById("id").value;
                pass = document.getElementById("pswd").value;
          } catch (error) {

          }

          try {
               // Make a GET request to the specified URL
               const response = await fetch(`https://busticket-backend.onrender.com/users?userId=${id}&pswd=${pass}`);


               // Check if the response is successful
               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }

               // Parse the JSON response
               data = await response.json();
               console.log(data);
               if (data.message === 'User found') {
                    setIsLoggedIn(prevState => !prevState);
               }

          } catch (error) {
               console.error('Error fetching data:', error.message);
          }
     };
     return (
          <Popover placement="bottom">
               <PopoverHandler >
                    <Button className="p-2 backdrop-brightness-95">Subscribe</Button>
               </PopoverHandler>
               <PopoverContent className="w-96 backdrop-blur-sm backdrop-brightness-95">
                    <Typography variant="h6" color="blue-gray" className="mb-6">
                         LogIn/SignIn
                    </Typography>
                    <Typography
                         variant="small"
                         color="blue-gray"
                         className="mb-1 font-bold"
                    >
                         Your Name
                    </Typography>
                    <div className="flex flex-col gap-1">
                         <Input
                              size="lg"
                              id="id"
                              placeholder="User ID"
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-1"
                              labelProps={{
                                   className: "before:content-none after:content-none ",
                              }}
                         />
                         <Input
                              size="lg"
                              id="pswd"
                              placeholder="Password"
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-1"
                              labelProps={{
                                   className: "before:content-none after:content-none",
                              }}
                         />
                         <Button onClick={authenticate} variant="gradient" className="flex-shrink-0">
                              Login
                         </Button>
                    </div>
               </PopoverContent>
          </Popover>
     );
}