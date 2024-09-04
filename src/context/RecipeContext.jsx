import React, { createContext, useState, useEffect } from 'react'; // Importa React, createContext, useState y useEffect.

const RecipeContext = createContext(); // Crea un nuevo contexto llamado RecipeContext.

const RecipeProvider = ({ children }) => { 
  // Define un componente RecipeProvider que envolverá a otros componentes para proporcionarles el contexto de recetas.
  
  // Inicializa el estado 'recipes' cargando las recetas desde localStorage, si existen.
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  // Guarda las recetas en localStorage cada vez que cambia el estado 'recipes'.
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes)); 
    // Convierte el estado 'recipes' a una cadena JSON y lo guarda en localStorage.
  }, [recipes]); // Este efecto se ejecuta cada vez que 'recipes' cambia.

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {/* Proporciona el contexto de recetas a los componentes hijos */}
      {children} 
      {/* Renderiza todos los componentes hijos que están envueltos por RecipeProvider */}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext }; 
// Exporta RecipeProvider y RecipeContext para que puedan ser utilizados en otras partes de la aplicación.
