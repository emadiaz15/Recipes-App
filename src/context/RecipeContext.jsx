import React, { createContext, useState, useEffect } from 'react'; // Importa React, createContext, useState y useEffect.

const RecipeContext = createContext(); // Crea un nuevo contexto llamado RecipeContext.

const RecipeProvider = ({ children }) => { // Define un componente RecipeProvider que envolverá a otros componentes para proporcionarles el contexto de recetas.
  const [recipes, setRecipes] = useState([]); // Declara un estado 'recipes' para almacenar la lista de recetas, inicialmente vacío.

  // Carga las recetas desde el localStorage cuando el componente se monta por primera vez.
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || []; // Intenta cargar recetas guardadas desde localStorage, o un array vacío si no hay recetas.
    setRecipes(savedRecipes); // Actualiza el estado 'recipes' con las recetas cargadas desde localStorage.
  }, []); // La lista de dependencias vacía asegura que este efecto se ejecute solo una vez al montar el componente.

  // Guarda las recetas en localStorage cada vez que cambia el estado 'recipes'.
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes)); // Convierte el estado 'recipes' a una cadena JSON y lo guarda en localStorage.
  }, [recipes]); // Este efecto se ejecuta cada vez que 'recipes' cambia.

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}> 
      {/* Proporciona el contexto de recetas a los componentes hijos */}
      {children} 
      {/* Renderiza todos los componentes hijos que están envueltos por RecipeProvider */}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext }; // Exporta RecipeProvider y RecipeContext para que puedan ser utilizados en otras partes de la aplicación.
