import React from 'react'; // Importa la librería React para crear componentes.

const RecipeCard = ({ recipe }) => { // Define el componente funcional RecipeCard, que recibe un objeto 'recipe' como prop.
  return (
    <div className="bg-white shadow-md rounded-lg p-4"> // Contenedor principal de la tarjeta de receta, con fondo blanco, sombra, bordes redondeados y padding.
      <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2> // Muestra el nombre de la receta en un título de tamaño grande, con fuente seminegrita y un margen inferior.
      <p className="text-gray-700">{recipe.description}</p> // Muestra la descripción de la receta en un párrafo con texto de color gris.
      <p className="text-sm text-gray-500 mt-2">Added by: {recipe.username}</p> // Muestra el nombre del usuario que agregó la receta, en un texto pequeño y gris claro, con un margen superior.
    </div>
  );
};

export default RecipeCard; // Exporta el componente RecipeCard para que pueda ser utilizado en otras partes de la aplicación.
