import React from 'react';

import Menu from './painel/Menu';
import Search from './painel/Search';
import Articles from './painel/Articles';

const Home = () => {
  const articles = [
    {
      id: "1",
      title: "Microsserviços e a web 3.0",
      autor: "Jailton de Souza Silva",
      resumo: "PT - EN",
      idioma: "PT",
    },
    {
      id: "2",
      title: "Python como alternativa para um desenvolvimento ágil",
      autor: "Jailton de Souza Silva",
      resumo: "PT - EN",
      idioma: "PT",
    },
    {
      id: "3",
      title: "Software livre e a segurança na tecnologia da informação",
      autor: "Jailton de Souza Silva",
      resumo: "PT - EN",
      idioma: "PT",
    }
  ]
  return ( 
    <div className='container-fluid'>
      <div className='row'>
        <Menu />
        <div className='col'>
          <Search />
          <Articles articles={articles}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
