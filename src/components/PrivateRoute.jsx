import React from 'react'; // Importa la librería React para trabajar con componentes en React.
import { Navigate } from 'react-router-dom'; // Importa Navigate desde react-router-dom, que permite redirigir al usuario a una ruta diferente.

const PrivateRoute = ({ children }) => { // Define el componente funcional PrivateRoute, que recibe a sus hijos como prop.
  const currentUser = sessionStorage.getItem('currentUser'); // Obtiene el usuario actual de sessionStorage, si existe.

  return currentUser ? children : <Navigate to="/login" />; // Si hay un usuario logueado, renderiza los hijos (children), si no, redirige a la página de login.
};

export default PrivateRoute; // Exporta el componente PrivateRoute para que pueda ser utilizado en otras partes de la aplicación.
