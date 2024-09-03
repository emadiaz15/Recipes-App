import React, { useState } from 'react'; // Importa React y el hook useState de React.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom para manejar la navegación programática.

const Login = () => {
  const [username, setUsername] = useState(''); // Declara el estado 'username' con un valor inicial vacío.
  const [password, setPassword] = useState(''); // Declara el estado 'password' con un valor inicial vacío.
  const navigate = useNavigate(); // Obtiene una función para manejar la navegación dentro de la aplicación.

  const handleLogin = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario de recargar la página.
    const users = JSON.parse(localStorage.getItem('users')) || []; // Obtiene los usuarios guardados en localStorage o un array vacío si no hay usuarios.
    const user = users.find(user => user.username === username && user.password === password); 
    // Busca en la lista de usuarios uno que coincida con el nombre de usuario y la contraseña proporcionados.

    if (!user) { // Si no se encuentra un usuario que coincida, muestra una alerta.
      alert('Invalid credentials!');
      return; // Detiene la ejecución de la función si las credenciales son inválidas.
    }

    sessionStorage.setItem('currentUser', username); // Si las credenciales son válidas, guarda el nombre de usuario en sessionStorage.
    navigate('/recipes'); // Navega a la página de recetas.
  };

  return (
    <div className="flex h-screen">
      {/* Panel izquierdo - Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username:</label>
              <input
                type="text"
                value={username} // El valor del campo se vincula al estado 'username'.
                onChange={(e) => setUsername(e.target.value)} // Actualiza el estado 'username' cuando el usuario escribe.
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required // Campo requerido.
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password:</label>
              <input
                type="password"
                value={password} // El valor del campo se vincula al estado 'password'.
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado 'password' cuando el usuario escribe.
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required // Campo requerido.
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
              Login
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Don't have an account? <a href="/register" className="text-black hover:underline">Sign Up here</a></p>
            {/* Enlace a la página de registro */}
          </div>
        </div>
      </div>
      
      {/* Panel derecho - Imagen */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-100">
        <img 
          src="/images/dinner.png" // Ruta de la imagen que se mostrará en el panel derecho.
          alt="Dinner Illustration" // Texto alternativo para la imagen.
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Login; // Exporta el componente Login para que pueda ser utilizado en otras partes de la aplicación.
