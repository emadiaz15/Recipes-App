import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    alert('Recipe deleted successfully!');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Recipe List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">{recipe.name}</h2>
            <p className="text-gray-700 mb-4">{recipe.description}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
            >
              View Details
            </Link>
            <button
              onClick={() => handleDelete(recipe.id)}
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 block w-full text-center"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
