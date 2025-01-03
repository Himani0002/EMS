import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Optionally retrieve the user from localStorage if needed
    const storedUser = getLocalStorage('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      setLocalStorage('user', 'admin'); // Store user in localStorage
    } else if (email === 'employee@me.com' && password === '456') {
      setUser('employee');
      setLocalStorage('user', 'employee'); // Store user in localStorage
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
