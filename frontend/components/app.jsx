import React from 'react';
import RecipeIndexItemContainer from './recipes/recipe_index_item_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import RecipeShowContainer from './recipes/recipe_show_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom'

const App = () => (
  <div>
    <Route path="/demo" component={RecipeIndexItemContainer}/>
    <Route path="/recipes" component={RecipeIndexContainer}/>
    <Route path="/recipe/:id" component={RecipeShowContainer}/>
  </div>
);

export default App;
