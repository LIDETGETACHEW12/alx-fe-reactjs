import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import FavoriteButton from './FavoriteButton';
import {useRecipeStore} from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <FavoriteButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
