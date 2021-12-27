import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/login/PrivateRoute';
import Home from './components/Home';
import Login from './components/login/Login';
import CreateAccount from './components/login/CreateAccount';
import EditProfile from './components/login/EditProfile';
import NotFoundError from './components/NotFoundError';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={ Home } />
        <Route path="/login" exact component={ Login } />
        <Route path="/account-create" exact component={ CreateAccount } />
        <PrivateRoute path="/edit-profile" component={ EditProfile } />
        <Route component={ NotFoundError } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
