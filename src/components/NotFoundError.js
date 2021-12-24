import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundError = () => {
  return (
    <>
      <h1>404: NotFondError.</h1>
      <h3>
        Esta página não existe
      </h3>
      Volte para a nossa Home Page: <Link to="/">Home</Link>
    </>
  );
}
 
export default NotFoundError;
