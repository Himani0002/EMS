import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    const { employee, admin } = getLocalStorage()
    setuserData(employee, admin)

  }, [])


  return (
    <AuthContext.Provider value="Himani">
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
