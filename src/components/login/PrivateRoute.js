import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children, ...rest}) => {
  const state = useSelector((state) => state.logged)

  if (!state.logged) {
    return <Navigate to='/login' {...rest} />
  }
  return children
}

export default PrivateRoute;
