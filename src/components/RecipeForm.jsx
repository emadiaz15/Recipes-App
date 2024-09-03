import React, { useState, useContext } from 'react'; // Importa React, useState y useContext para manejar el estado y contexto en el componente.
import { RecipeContext } from '../context/RecipeContext'; // Importa el contexto de recetas para compartir y manejar el estado de las recetas.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegar entre rutas.

const RecipeForm = () => { // Define el componente funcional RecipeForm.
  const [name, setName] = useState(''); // Define el estado para el nombre de la receta.
  const [description, setDescription] = useState(''); // Define el estado para la descripción de la receta.
  const [ingredients, setIngredients] = useState(''); // Define el estado para los ingredientes de la receta.
  const { recipes, setRecipes } = useContext(RecipeContext); // Utiliza el contexto de recetas para obtener y actualizar la lista de recetas.
  const navigate = useNavigate(); // Inicializa useNavigate para redirigir a otras rutas.

  const handleAddRecipe = (e) => { // Define la función que maneja el evento de agregar una receta.
    e.preventDefault(); // Previene la acción predeterminada del formulario (recargar la página).
    const newRecipe = { // Crea un nuevo objeto receta con los datos ingresados.
      id: Date.now(), // Genera un ID único para la receta basado en la fecha actual.
      name, // Asigna el nombre de la receta.
      description, // Asigna la descripción de la receta.
      ingredients: ingredients.split(',').map(item => item.trim()), // Convierte la lista de ingredientes en un array.
      author: sessionStorage.getItem('currentUser') // Asigna el usuario actual como autor de la receta.
    };
    const updatedRecipes = [...recipes, newRecipe]; // Agrega la nueva receta a la lista existente de recetas.
    setRecipes(updatedRecipes); // Actualiza el estado de las recetas con la lista que incluye la nueva receta.
    navigate('/recipes'); // Redirige a la página de la lista de recetas después de agregar una receta.
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center" // Define el contenedor principal con estilos de Tailwind CSS para centrar el formulario y aplicar un fondo.
      style={{
        backgroundImage: `url('/images/background.jpg')`, // Aplica una imagen de fondo que cubre toda la pantalla.
      }}
    >
      <form onSubmit={handleAddRecipe} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"> 
        {/* Define el formulario con un fondo blanco, padding, bordes redondeados y sombra */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create New Recipe</h2> 
        {/* Título del formulario */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Name:</label> 
          {/* Etiqueta para el campo de nombre de la receta */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            // Actualiza el estado 'name' cada vez que el usuario cambia el valor del input.
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            // Aplica estilos al input.
            placeholder="Enter the recipe name" 
            // Texto de marcador de posición para el input.
            required 
            // Hace que este campo sea obligatorio.
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label> 
          {/* Etiqueta para el campo de descripción de la receta */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            // Actualiza el estado 'description' cada vez que el usuario cambia el valor del textarea.
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            // Aplica estilos al textarea.
            placeholder="Enter the recipe description" 
            // Texto de marcador de posición para el textarea.
            rows="4" 
            // Define la cantidad de filas visibles en el textarea.
            required 
            // Hace que este campo sea obligatorio.
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients (comma-separated):</label> 
          {/* Etiqueta para el campo de ingredientes de la receta */}
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)} 
            // Actualiza el estado 'ingredients' cada vez que el usuario cambia el valor del input.
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            // Aplica estilos al input.
            placeholder="e.g. Sugar, Flour, Eggs" 
            // Texto de marcador de posición para el input de ingredientes.
            required 
            // Hace que este campo sea obligatorio.
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          {/* Botón para enviar el formulario y agregar la receta */}
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm; // Exporta el componente RecipeForm para que pueda ser utilizado en otras partes de la aplicación.
