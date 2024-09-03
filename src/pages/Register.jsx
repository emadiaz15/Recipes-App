import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado del componente.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para manejar la navegación entre rutas.

const Register = () => {
  const [username, setUsername] = useState(''); // Define el estado para el nombre de usuario.
  const [password, setPassword] = useState(''); // Define el estado para la contraseña.
  const navigate = useNavigate(); // Inicializa la función de navegación.

  const handleRegister = (e) => {
    e.preventDefault(); // Previene que el formulario se envíe automáticamente.
    const users = JSON.parse(localStorage.getItem('users')) || []; 
    // Recupera la lista de usuarios del localStorage o crea una lista vacía si no existe.
    const userExists = users.find(user => user.username === username); 
    // Busca si el usuario ya existe en la lista.

    if (userExists) { 
      alert('User already exists!'); // Si el usuario ya existe, muestra una alerta.
      return; // Detiene la ejecución del código si el usuario ya existe.
    }

    const newUser = { username, password }; 
    // Crea un nuevo objeto de usuario con el nombre de usuario y la contraseña.
    users.push(newUser); 
    // Añade el nuevo usuario a la lista de usuarios.
    localStorage.setItem('users', JSON.stringify(users)); 
    // Guarda la lista actualizada de usuarios en el localStorage.
    alert('User registered successfully!'); 
    // Muestra una alerta indicando que el usuario se ha registrado con éxito.
    navigate('/login'); 
    // Redirige al usuario a la página de inicio de sesión.
  };

  return (
    <div className="flex h-screen">
      {/* Panel izquierdo - Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Register</h1> 
          {/* Título del formulario */}
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                // Actualiza el estado del nombre de usuario al cambiar el valor.
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required 
                // Campo obligatorio.
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                // Actualiza el estado de la contraseña al cambiar el valor.
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required 
                // Campo obligatorio.
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
              Register
            </button> 
            {/* Botón de registro */}
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Already have an account? <a href="/login" className="text-black hover:underline">Login here</a></p> 
            {/* Enlace para redirigir al usuario a la página de inicio de sesión */}
          </div>
        </div>
      </div>
      
      {/* Panel derecho - Imagen */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-100">
        <img 
          src="/images/dinner.png" 
          alt="Dinner Illustration" 
          className="max-w-full h-auto"
        />
        {/* Imagen decorativa a la derecha del formulario */}
      </div>
    </div>
  );
};

export default Register; 
// Exporta el componente Register para que pueda ser utilizado en otras partes de la aplicación.
