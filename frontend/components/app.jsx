import React from 'react';
import RecipeIndexItemContainer from './recipes/recipe_index_item_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import RecipeShowContainer from './recipes/recipe_show_container';
import NavHeaderContainer from './nav/nav_header_container';
import SplashContainer from './splash/splash_container';
import LogOutContainer from './logout/logout_container';
import { ProtectedRoute, SplashRoute, HeaderRoute } from '../util/route_util';
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
      <Route path="/" component={NavHeaderContainer}/>
    </header>
    <Switch>
      <Route path="/recipes/:id" component={RecipeShowContainer}/>
      <Route exact path="/recipes" component={RecipeIndexContainer}/>
      <Route exact path="/" component={SplashContainer}/>
      {/* <Route path="/logout" component={LogOutContainer}/> */}
    </Switch>
  </div>
);

export default App;
