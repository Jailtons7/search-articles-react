import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import searchArticle from '../../img/logo_search_articles.png'

const Menu = () => {
  const [userName, setUserName] = React.useState("User Name")

  React.useEffect(() => {
    const header  = {
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    }

    const userData = async (url) => {
      axios.get(url, {headers: header}).then((response) => {
        console.log(response)
        setUserName(response.data.full_name)
      })
    }

    userData('http://localhost:8000/authentication/users/')
  }, [])

  return (
    <>
      <div className='col-auto col-md-2 px-0 bg-secondary'>
        <div className='ms-0 row w-100 bg-white d-none d-sm-block'>
          <Link to='/' >
            <img width="60%" height='40%' src={searchArticle} alt="Logo" />
          </Link>
        </div>
        <div className='flex-nowrap my-4 text-center'>
          <i className="bi bi-person text-white"></i>
          <span className='ms-3 text-white'>{userName}</span>
        </div>
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
            <li className='nav-item'>
              <Link to='/edit-profile' className='text-white nav-link align-middle px-0'>
                <span className='ms-1 d-none d-sm-inline'>
                  Configurações
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
