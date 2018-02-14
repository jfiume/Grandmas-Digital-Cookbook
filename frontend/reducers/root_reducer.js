import { combineReducers } from 'redux';

import RecipesReducer from './recipes_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  recipes: RecipesReducer
});

export default RootReducer;
