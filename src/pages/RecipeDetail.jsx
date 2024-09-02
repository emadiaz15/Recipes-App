import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">{recipe.name}</h1>
        <p className="text-gray-700 mb-6">{recipe.description}</p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
        <Link
          to="/"
          className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Recipes
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
