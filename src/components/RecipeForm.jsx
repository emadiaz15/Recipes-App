import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const { recipes, setRecipes } = useContext(RecipeContext);
  const navigate = useNavigate();

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      description,
      ingredients: ingredients.split(',').map(item => item.trim())
    };
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <form onSubmit={handleAddRecipe} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create New Recipe</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the recipe name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the recipe description"
            rows="4"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients (comma-separated):</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Sugar, Flour, Eggs"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
