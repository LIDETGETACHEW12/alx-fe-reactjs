import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';  // assuming your mock data is in data.json

const RecipeDetail = () => {
  const { id } = useParams();  // Get the recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID
    const selectedRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="mt-2 text-gray-600">{recipe.summary}</p>
      
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions && recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2 text-gray-700">{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default RecipeDetail;
