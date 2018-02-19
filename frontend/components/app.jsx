import React from 'react';
import RecipeIndexItemContainer from './recipes/recipe_index_item_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import RecipeShowContainer from './recipes/recipe_show_container';
import NavHeaderContainer from './nav/nav_header_container';
import SplashContainer from './splash/splash_container';
import { ProtectedRoute, SplashRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom'

const App = () => (
  <div>
    <header>
      <ProtectedRoute path="/" component={NavHeaderContainer}/>
    </header>
    <Switch>
      <ProtectedRoute path="/recipes/:id" component={RecipeShowContainer}/>
      <ProtectedRoute exact path="/recipes" component={RecipeIndexContainer}/>
      <SplashRoute exact path="/" component={SplashContainer}/>
      <Route path="logout" />
    </Switch>
  </div>
);

export default App;
