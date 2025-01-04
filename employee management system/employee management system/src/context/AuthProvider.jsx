import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const { employee } = getLocalStorage()
    setUserData(employee)
  }, [])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
