import React from 'react';
import { Link } from 'react-router-dom';
import searchArticle from '../../img/search_articles_t.png'

const Menu = () => {
  return (
    <>
      <div className='col-auto col-md-2 px-0 bg-secondary'>
        <div className='ms-0 row w-100 bg-white d-none d-sm-block'>
          <img height="60px" src={searchArticle} alt="Logo" />
        </div>
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <Link to='/' className='text-white d-flex align-items-center pb-3 mb-md-0 me-md-auto text-write text-decoration-none'>
            <span className='fs-5 d-none d-sm-inline'>Home</span>
          </Link>
          <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
            <li className='nav-item'>
              <Link to='/edit-profile' className='text-white nav-link align-middle px-0'>
                <span className='ms-1 d-none d-sm-inline'>
                  Editar Perfil
                </span>
              </Link>
            </li>
            <li>
              <Link to='/logout' className='text-white nav-link align-middle px-0'>
                <span className='ms-1 d-none d-sm-inline'>
                  Sair
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
