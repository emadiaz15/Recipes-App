import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const currentUser = sessionStorage.getItem('currentUser');
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/" className="hover:text-gray-300">RecipeApp</Link>
      </div>
      <div>
        {currentUser ? (
          <>
            <Link to="/add-recipe" className="mx-2 hover:text-gray-300">Add Recipe</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mx-2 hover:text-gray-300">Login</Link>
            <Link to="/register" className="mx-2 hover:text-gray-300">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
