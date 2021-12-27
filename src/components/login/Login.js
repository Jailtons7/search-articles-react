import React from 'react';
import { Link } from 'react-router-dom';

import SearchArticlesLogo from './SearchArticleLogo'
import './Login.css'

const Login = () => {
  return ( 
    <section className='vh-100'>
      <div className='container-sm py-5 h-100'>
        <div className='row d-flex align-items-center justify-content-center h-100'>
          <div className="col-sm-10">
            <div className='row g-0'>
              <div className='col-sm-6'>
                <div className='card-body padding-md-5 mx-md-4'>
                  <form>
                    <div className='form-outline mb-4'>
                      <input type='email'id='email' name='email' className='form-control' 
                              placeholder='nome@exemplo.com' />
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='password' id='password' name='password' className='form-control'
                              placeholder='Senha' />
                    </div>

                    <div className='text-center pt-1 mb-5 pb-1'>
                      <button type='button' className='btn btn-primary w-100 mb-3'>
                        Entrar
                      </button><br/>
                      <Link className='text-secondary' to="/recover-password">Esqueci minha senha</Link>
                    </div>

                    <div className='text-center'>
                      <Link className='text-secondary' to="/account-create">
                        <i className="bi bi-arrow-right-circle"></i>
                        <span className='ms-3'>Cadastre-se</span>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <SearchArticlesLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Login;
