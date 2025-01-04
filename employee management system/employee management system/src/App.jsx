import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const storedUser = getLocalStorage('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      setLocalStorage('user', 'admin');
    } else if (
      authData &&
      authData.employees &&
      authData.employees.find((e) => e.email === email && e.password === password)
    ) {
      setUser('employee');
      setLocalStorage('user', 'employee');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
    </>
  );
};

export default App;
