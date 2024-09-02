import React, { createContext, useState, useEffect } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from localStorage
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  // Save recipes to localStorage
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };
