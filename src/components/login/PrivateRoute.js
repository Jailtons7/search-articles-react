import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import IsLoged from './IsLoged';

const PrivateRoute = ({component: Component, ...rest}) => {
  return ( 
    <Route
      render={(props) => IsLoged()
        ? <Component {...props} /> 
        : <Redirect to="/login" />}
    />
  );
}

export default PrivateRoute;
