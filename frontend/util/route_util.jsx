import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    loggedIn? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Splash = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    loggedIn? (
      <Redirect to="/recipes" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const Header = ({component: Component, path, loggedIn}) => {
  const page = window.location.hash.slice(2)
  if (loggedIn && page !== "logout") {
    return (
      <Route path={path} render={(props) => (
        <Component {...props} />
      )} />
    )
  } else {
    return (
      <div></div>
    )
  }
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const SplashRoute = withRouter(connect(mapStateToProps, null)(Splash));
export const HeaderRoute = withRouter(connect(mapStateToProps, null)(Header));
