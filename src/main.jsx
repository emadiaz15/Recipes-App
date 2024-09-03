import React from 'react'; // Importa React para crear componentes.
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar la aplicación en el DOM.
import './index.css'; // Importa el archivo CSS global para los estilos de la aplicación.
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
// Importa los componentes necesarios para manejar la navegación entre rutas.

import RecipeList from './pages/RecipeList'; // Importa el componente de la lista de recetas.
import RecipeDetail from './pages/RecipeDetail'; // Importa el componente de detalle de receta.
import RecipeForm from './components/RecipeForm'; // Importa el componente para agregar una nueva receta.
import { RecipeProvider } from './context/RecipeContext'; 
// Importa el proveedor del contexto de recetas para compartir el estado entre componentes.
import Register from './pages/Register'; // Importa el componente de registro de usuarios.
import Login from './pages/Login'; // Importa el componente de inicio de sesión.
import PrivateRoute from './components/PrivateRoute'; 
// Importa el componente de ruta privada para proteger las rutas que requieren autenticación.
import Navbar from './components/Navbar'; // Importa el componente de la barra de navegación.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Habilita el modo estricto para detectar posibles problemas en la aplicación */}
    <RecipeProvider>
      {/* Proveedor del contexto de recetas, que comparte el estado entre componentes */}
      <BrowserRouter>
        {/* Habilita la funcionalidad de navegación en la aplicación */}
        <Navbar /> 
        {/* Muestra la barra de navegación en todas las páginas */}
        <Routes>
          {/* Define las rutas de la aplicación */}
          <Route path="/" element={<Navigate to="/login" />} /> 
          {/* Redirige la ruta raíz "/" a la página de inicio de sesión */}
          <Route path="/login" element={<Login />} /> 
          {/* Ruta para la página de inicio de sesión */}
          <Route path="/register" element={<Register />} /> 
          {/* Ruta para la página de registro de usuarios */}
          <Route path="/recipes" element={<PrivateRoute><RecipeList /></PrivateRoute>} /> 
          {/* Ruta para la lista de recetas, protegida por la ruta privada */}
          <Route path="/recipe/:id" element={<PrivateRoute><RecipeDetail /></PrivateRoute>} /> 
          {/* Ruta para ver el detalle de una receta, protegida por la ruta privada */}
          <Route path="/add-recipe" element={<PrivateRoute><RecipeForm /></PrivateRoute>} /> 
          {/* Ruta para agregar una nueva receta, protegida por la ruta privada */}
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  </React.StrictMode>
);

