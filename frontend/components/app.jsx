import React from 'react';
import RecipeIndexItemContainer from './recipes/recipe_index_item_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom'

const App = () => (
  <div>
    <Route path="/" component={RecipeIndexItemContainer}/>
  </div>
);

export default App;
