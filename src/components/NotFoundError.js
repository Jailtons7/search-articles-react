import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './painel/Menu';

const NotFoundError = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Menu />
          <div className='col align-self-center'>
            <div className='row justify-content-sm-center'>
              <div className='col-sm-4'>
                <h1>404: NotFoundError.</h1>
                <h3>
                  Esta página não existe
                </h3>
                Volte para a nossa Home Page: <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default NotFoundError;
