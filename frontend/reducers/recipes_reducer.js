import merge from 'lodash/merge';

import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE
} from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RECIPES:
      return Object.assign({}, acton.recipe);
    case RECEIVE_RECIPE:
      const newRecipe = {[action.recipe.id]: action.recipe};
      return Object.assign({}, newRecipe);
    default:
      return state;
  }
};

export default RecipesReducer;
