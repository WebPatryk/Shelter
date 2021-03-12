import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Login from 'view/Login/Login';
import Register from 'view/Register/Register';
import Events from 'view/Events/Events';
import Navigation from 'components/Navigation/Navigation';
import Home from 'view/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'helpers/PrivateRoute';

const Root = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Navigation />
          <Home />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/events">
          <Navigation />
          <Events />
        </Route>
      </Switch>
    </Router>
  </>
);

export default Root;
