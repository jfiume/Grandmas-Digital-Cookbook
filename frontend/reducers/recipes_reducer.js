import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE
} from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RECIPES:
    console.log("here");
      return Object.assign({}, acton.recipes);
    case RECEIVE_RECIPE:
    console.log("should not be here");
      const newRecipe = {[action.recipe.id]: action.recipe};
      return Object.assign({}, newRecipe);
    default:
      return state;
  }
};

export default RecipesReducer;
