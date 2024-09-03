import React from 'react'; // Importa la librería React, necesaria para trabajar con componentes en React.
import { Link, useNavigate } from 'react-router-dom'; // Importa Link para navegación entre rutas y useNavigate para redirigir a diferentes rutas.

const Navbar = () => { // Define el componente funcional Navbar.
  const currentUser = sessionStorage.getItem('currentUser'); // Obtiene el usuario actual de la sessionStorage, si existe.
  const navigate = useNavigate(); // Inicializa la función useNavigate, que permite redirigir a diferentes rutas.

  const handleLogout = () => { // Define la función handleLogout, que se ejecuta cuando el usuario hace clic en el botón de logout.
    sessionStorage.removeItem('currentUser'); // Elimina el usuario actual de la sessionStorage para cerrar la sesión.
    navigate('/login'); // Redirige al usuario a la página de login.
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-gray-900 dark:text-white">
          RecipeApp
        </Link>
        
        {/* Botones de Login, Register o Logout */}
        <div className="flex items-center space-x-4">
          {currentUser ? ( // Condicional que verifica si hay un usuario logueado.
            <button
              onClick={handleLogout} // Ejecuta la función handleLogout cuando se hace clic en el botón.
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" // Aplica estilos al botón de logout.
            >
              Logout
            </button>
          ) : ( // Si no hay un usuario logueado, se muestran los botones de Login y Register.
            <>
              <Link
                to="/login" // Enlace que redirige a la página de login.
                className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800" // Aplica estilos al botón de login.
              >
                Login
              </Link>
              <Link
                to="/register" // Enlace que redirige a la página de registro.
                className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800" // Aplica estilos al botón de registro.
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporta el componente Navbar para que pueda ser utilizado en otras partes de la aplicación.
