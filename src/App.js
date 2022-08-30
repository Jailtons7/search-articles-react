import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/login/PrivateRoute';
import Home from './components/Home';
import ArticleDetails from './components/painel/ArticleDetails';
import Login from './components/login/Login';
import CreateAccount from './components/login/CreateAccount';
import EditProfile from './components/login/EditProfile';
import NotFoundError from './components/NotFoundError';
import Logout from './components/login/Logout';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={
          <PrivateRoute children={ <Home />} />
        }/>
        <Route path="/articles/:id" exact element={ 
          <PrivateRoute children={<ArticleDetails />} />
        }/>
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/account-create" exact element={ <CreateAccount /> } />
        <Route path="/edit-profile" element={ 
          <PrivateRoute children={<EditProfile />} />
        }/>
        <Route exact path="/logout" element={ 
          <PrivateRoute children={<Logout />} />
        }/>
        <Route element={ <NotFoundError /> } />
      </Routes>
    </div>
  );
}

export default App;
