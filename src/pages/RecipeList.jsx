import React, { useContext } from 'react'; // Importa React y el hook useContext para usar el contexto.
import { RecipeContext } from '../context/RecipeContext'; // Importa el contexto RecipeContext para acceder a las recetas.
import { Link, useNavigate } from 'react-router-dom'; // Importa Link para navegación y useNavigate para redirecciones.

const RecipeList = () => {
  const { recipes, setRecipes } = useContext(RecipeContext); 
  // Usa el contexto para obtener y actualizar las recetas.
  const currentUser = sessionStorage.getItem('currentUser'); 
  // Obtiene el usuario actualmente logueado desde sessionStorage.
  const navigate = useNavigate(); // Hook para realizar navegaciones programáticas.

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id); 
    // Filtra las recetas, eliminando la que tiene el ID pasado como argumento.
    setRecipes(updatedRecipes); 
    // Actualiza el estado de las recetas con la lista actualizada.
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes)); 
    // Guarda la lista actualizada de recetas en localStorage.
    alert('¡Receta eliminada con éxito!'); 
    // Muestra un mensaje de éxito al usuario.
  };

  const handleAddRecipe = () => {
    navigate('/add-recipe'); // Navega a la página para agregar una nueva receta.
  };

  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/background.jpg')`, 
        // Establece una imagen de fondo para el contenedor principal.
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-extrabold text-gray-800 bg-white py-2 px-4 rounded-lg shadow-md">
          Recipe List
        </h1> 
        {/* Título "Recipe List" con estilo de botón, incluyendo fondo blanco, sombra y texto grande. */}
        {currentUser && (
          <button
            onClick={handleAddRecipe}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Add New Recipe
          </button>
        )}
        {/* Muestra el botón "Add New Recipe" solo si hay un usuario logueado. */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-3 text-gray-800">{recipe.name}</h2> 
            {/* Muestra el nombre de la receta en un estilo destacado. */}
            <p className="text-gray-700 mb-4">{recipe.description}</p> 
            {/* Muestra la descripción de la receta. */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
            >
              View Details
            </Link> 
            {/* Enlace para ver los detalles de la receta, redirige a la página de detalles de la receta. */}
            {currentUser && (
              <button
                onClick={() => handleDelete(recipe.id)}
                className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 block w-full text-center"
              >
                Delete
              </button>
            )}
            {/* Botón "Delete" que solo se muestra si el usuario está logueado, permite eliminar la receta. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList; // Exporta el componente RecipeList para su uso en otras partes de la aplicación.
