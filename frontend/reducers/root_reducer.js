import { combineReducers } from 'redux';

import RecipesReducer from './recipes_reducer';

const RootReducer = combineReducers({
  recipes: RecipesReducer
});

export default RootReducer;
