import React, { useContext } from 'react'; // Importa React y el hook useContext de React.
import { useParams, Link } from 'react-router-dom'; // Importa useParams para obtener los parámetros de la URL y Link para la navegación.
import { RecipeContext } from '../context/RecipeContext'; // Importa el contexto RecipeContext para acceder a las recetas.

const RecipeDetail = () => {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL.
  const { recipes } = useContext(RecipeContext); // Obtiene el estado de las recetas desde el contexto.
  const recipe = recipes.find((r) => r.id === parseInt(id)); 
  // Busca la receta que coincida con el 'id' proporcionado en la URL.

  if (!recipe) { // Si no se encuentra la receta, muestra un mensaje indicando que no se encontró.
    return <p>Recipe not found!</p>;
  }

  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/background.jpg')`, // Establece una imagen de fondo desde el directorio público.
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">{recipe.name}</h2> 
        {/* Muestra el nombre de la receta con un estilo grande y destacado. */}
        <p className="text-gray-700 mb-4">{recipe.description}</p> 
        {/* Muestra la descripción de la receta. */}
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Ingredients:</h3> 
        {/* Título para la sección de ingredientes. */}
        <ul className="list-disc list-inside text-gray-700 mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li> 
            // Recorre los ingredientes de la receta y los muestra en una lista.
          ))}
        </ul>
        <Link
          to="/recipes" // Cambiado a "/recipes" para redirigir correctamente a la lista de recetas.
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Back to Recipe List
          {/* Botón que redirige al usuario de vuelta a la lista de recetas */}
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail; // Exporta el componente RecipeDetail para su uso en otras partes de la aplicación.
