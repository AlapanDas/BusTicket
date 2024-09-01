export interface UserLogin {
     username: string;
     password: string;
}

export interface UserResponse {
     status: boolean;
     username: string;
     email: string;
     access_token: string;
     isAdmin: boolean;
}
export interface UserSignup {
     username: string;
     password: string;
     email: string;
   }