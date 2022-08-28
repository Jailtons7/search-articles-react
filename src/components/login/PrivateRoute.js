import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({component: Component, ...rest}) => {
  const [logged, setLogged] = useState(true)

  useEffect(() => {
    let isMounted = true
    const token = localStorage.getItem('access')
    const header  = {
      'Authorization': 'Bearer ' + token
    }

    const verifyLogin = async (url) => {
      await axios.get(url, {headers: header})
      .then(
        (response) => {
          if (isMounted) {
            console.log('passou')
            setLogged(true)
          }
        }
      ).catch((error) => {
        console.log(error.response.data)
      })
    }

    verifyLogin('http://localhost:8000/authentication/users/')

    return () => { isMounted = false }
  }, [])

  console.log(logged)

  return ( 
    <Route
      render={(props) => logged
        ? <Component {...props} /> 
        : <Redirect to="/login" />}
    />
  );
}

export default PrivateRoute;
