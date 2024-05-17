import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState({ username: null, isAdmin: false });

  return (
    <AuthContext.Provider value={{ loginInfo, setLoginInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
