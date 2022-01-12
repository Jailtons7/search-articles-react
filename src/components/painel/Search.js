import React from 'react';

import Header from './Header';
import Filtro from './Filtro';

const Search = (props) => {
  return (
    <div className='col py-3'>
      <Header title={ "ÁREA DE PESQUISA" }/>
      <Filtro articles={props.articles} setArticles={props.setArticles}/>
    </div>
  );
}

export default Search;
