import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import SearchArticlesLogo from './SearchArticleLogo'
import UtilsServices from '../../utils/UtilsServices';

const Login = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (location.state) {
      toast.success("Seja bem vindo(a) " + location.state.first_name + "! Faça login para acessar")
    }
  }, [location.state])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async (url, data) => {
    axios.post(url, data).then((response) => {
      localStorage.setItem('access', response.data.access)
      localStorage.setItem('refresh', response.data.refresh)
      history.push('/')
    }).catch((error) => {
      toast.error(error.response.data.detail)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = UtilsServices.formValidation(e)
    if (isValid) {
      const dataObj = {email: email, password: password}
      login('http://localhost:8000/authentication/token/obtain/', dataObj)
    }
  }

  return ( 
    <section className='vh-100'>
      <div className='container-sm py-5 h-100'>
        <div className='row d-flex align-items-center justify-content-center h-100'>
          <div className="col-sm-10">
            <div className='row g-0'>
              <div className='col-sm-6'>
                <div className='card-body padding-md-5 mx-md-4'>
                  <form method='POST' noValidate onSubmit={handleSubmit}>
                    <div className='form-outline mb-4'>
                      <input type='email'id='email' name='email' required className='form-control' 
                             onChange={(e) => {setEmail(e.target.value)}} placeholder='nome@exemplo.com' />
                      <div className='invalid-feedback'>Forneça um email válido</div>
                    </div>

                    <div className='form-outline mb-4'>
                      <input type='password' id='password' name='password' required className='form-control'
                             onChange={(e) => {setPassword(e.target.value)}} placeholder='Senha' />
                      <div className='invalid-feedback'>Forneça a sua senha</div>
                    </div>

                    <div className='text-center pt-1 mb-5 pb-1'>
                      <button type='submit' className='btn btn-primary w-100 mb-3'>
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
      <ToastContainer />
    </section>
  );
}
 
export default Login;
