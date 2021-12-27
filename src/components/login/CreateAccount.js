import React from 'react';
import { Link } from 'react-router-dom';

import SearchArticlesLogo from './SearchArticleLogo';


const CreateAccount = () => {
  return ( 
    <section className='vh-100'>
      <div className='container-sm py-5 h-100'>
        <div className='row d-flex align-items-center justify-content-center h-100'>
          <div className="col-sm-10">
            <div className='row g-0'>
              <div className='col-sm-6'>
                <h5 className='text-secondary mb-5 text-center'>CADASTRO PESSOAL</h5>
                <div className='card-body padding-md-5 mx-md-4'>
                  <form>
                    <div className='form-outline mb-4'>
                      <input type='text'id='id_name' name='name' className='form-control' 
                              placeholder='Nome Completo' />
                    </div>
                    
                    <div className='form-outline mb-4'>
                      <input type='email'id='email' name='email' className='form-control' 
                              placeholder='nome@exemplo.com' />
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='text'id='phone' name='phone' className='form-control' 
                              placeholder='(xx) x xxxx-xxxx' />
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='password' id='password' name='password' className='form-control'
                              placeholder='Senha' />
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='password' id='password' name='password' className='form-control'
                              placeholder='Confirme a Senha' />
                    </div>

                    <div className='text-center pt-1 mb-5 pb-1'>
                      <button type='button' className='btn btn-primary w-100 mb-3 text-white'>
                        CADASTRAR
                      </button><br/>
                      <Link className='text-secondary' to="/login">Já tenho cadastro</Link>
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

export default CreateAccount;
