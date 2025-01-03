import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  console.log(handleLogin)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setemail("")
    setpassword("")
  };

  return (

    <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
      <div className="border rounded-lg border-emerald-500 p-8 bg-gray-800 shadow-lg">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center space-y-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="border bg-transparent border-emerald-500 rounded-full py-3 px-6 outline-none text-lg placeholder:text-gray-400 text-white w-full focus:ring-2 focus:ring-emerald-500 transition"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            className="border bg-transparent border-emerald-500 rounded-full py-3 px-6 outline-none text-lg placeholder:text-gray-400 text-white w-full focus:ring-2 focus:ring-emerald-500 transition"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 rounded-full py-3 px-8 text-lg text-white font-semibold transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  ); { }
};

export default Login;
