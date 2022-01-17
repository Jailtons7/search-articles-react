import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import SearchArticlesLogo from './SearchArticleLogo';
import UtilsServices from '../../utils/UtilsServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateAccount = () => {
  const history = useHistory()

  const postUser = async (url, data) => {
    await axios.post(
      url, data
    ).then((response) => {
      if (response.status === 201) {
        history.push({
          pathname: '/login',
          state: response.data
        })
      } else {
        failToast(response.data)
      }
    }).catch((error) => {
      for ( const [key, value] of Object.entries(error.response.data)) {
        failToast(key + ": " + value[0])
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = UtilsServices.formValidation(e)

    if (isValid) {

      const formData = new FormData(e.target)

      const objData = {}
      formData.forEach((value, prop) => {
        objData[prop] = value
      })

      if (objData.password === objData.password2) {
        delete objData.password2
        postUser('http://localhost:8000/authentication/users/create/', objData)
      } else {
        failToast('A senha e a confirmação fornecidas são diferentes')
      }
    }
  }

  const failToast = (data) => toast.error(data)

  return ( 
    <section className='vh-100'>
      <div className='container-sm py-5 h-100'>
        <div className='row d-flex align-items-center justify-content-center h-100'>
          <div className="col-sm-10">
            <div className='row g-0'>
              <div className='col-sm-6'>
                <h5 className='text-secondary mb-5 text-center'>CADASTRO PESSOAL</h5>
                <div className='card-body padding-md-5 mx-md-4'>
                  <form method='POST' onSubmit={handleSubmit} noValidate>
                    <div className='form-outline mb-4'>
                      <input type='text'id='first_name' name='first_name' min='3' max='50' required 
                             className='form-control' placeholder='Primeiro nome' />
                      <div className='invalid-feedback'>Forneça um nome válido</div>
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='text'id='last_name' name='last_name' min='3' max='50' required 
                             className='form-control' placeholder='Último nome' />
                      <div className='invalid-feedback'>Forneça um sobrenome válido</div>
                    </div>
                    
                    <div className='form-outline mb-4'>
                      <input type='email'id='email' name='email' required className='form-control' 
                              placeholder='nome@exemplo.com' />
                      <div className='invalid-feedback'>Forneça um e-mail válido</div>
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='text'id='cpf' name='cpf' minLength='11' maxLength='11' required 
                              className='form-control' placeholder='999.999.999-99' />
                      <div className='invalid-feedback'>O CPF é obrigatório. Somente números</div>
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='text'id='phone' name='phone' minLength='8' maxLength='19' 
                              className='form-control' placeholder='(xx) x xxxx-xxxx' />
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='password' id='password' name='password' required className='form-control'
                              placeholder='Senha' />
                      <div className='invalid-feedback'>A senha é obrigatória</div>
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='password' id='password2' name='password2' required className='form-control'
                              placeholder='Confirme a Senha' />
                      <div className='invalid-feedback'>A confirmação de senha é obrigatória</div>
                    </div>

                    <div className='text-center pt-1 mb-5 pb-1'>
                      <button type='submit' className='btn btn-primary w-100 mb-3 text-white'>
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
      <ToastContainer />
    </section>
  );
}

export default CreateAccount;
