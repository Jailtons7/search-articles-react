import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return ( 
    <div className='col-auto col-md-2 px-sm-2 px-0 bg-dark'>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link to='/' className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-write text-decoration-none'>
          <span className='fs-5 d-none d-sm-inline'>Search Articles</span>
        </Link>
        <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
          <li className='nav-item'>
            <Link to='/edit-profile' className='nav-link align-middle px-0'>
              <span className='ms-1 d-none d-sm-inline'>
                Editar Perfil
              </span>
            </Link>
          </li>
          <li>
            <Link to='/logout' className='nav-link align-middle px-0'>
              <span className='ms-1 d-none d-sm-inline'>
                Sair
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
