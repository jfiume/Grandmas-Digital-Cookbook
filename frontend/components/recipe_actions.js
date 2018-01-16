import * as APIUtil from '../util/recipe_api_util';

export const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
});

export const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

export const fetchRecipes = () => dispatch => (
  APIUtil.fetchRecipes().then(recipes => (
    dispatch(receiveRecipes(recipes))
  ))
);

export const fetchRecipe = id => dispatch => (
  APIUtil.fetchRecipe(id).then(video => (
    dispatch(receiveRecipe(recipe))
  ))
);

export const searchRecipe = (query) => dispatch => (
  APIUtil.searchRecipe(query).then(recipes => (
    dispatch(receiveRecipes(recipes))
  ))
);
