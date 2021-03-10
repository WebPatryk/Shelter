import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Login from 'view/Login/Login';
import Register from 'view/Register/Register';
import Events from 'view/Events/Events';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => (
  <>
    <GlobalStyle />
    {/* <Navigation/> */}
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
      </Switch>
    </Router>
  </>
);

export default Root;
