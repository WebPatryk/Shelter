import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Login from 'view/Login/Login';
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
        <Route path="/register">{/* <Register /> */}</Route>
      </Switch>
    </Router>
  </>
);

export default Root;