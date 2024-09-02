import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
      alert('Invalid credentials!');
      return;
    }

    sessionStorage.setItem('currentUser', username);
    navigate('/');
  };

  return (
    <div className="flex h-screen">
      {/* Left Pane - Form */}
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
              Login
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Don't have an account? <a href="#" className="text-black hover:underline">Sign Up here</a></p>
          </div>
        </div>
      </div>
      
      {/* Right Pane - Image */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white">
        <img 
          src="/images/portada.png" 
          alt="Caesar Salad Illustration" 
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Login;
