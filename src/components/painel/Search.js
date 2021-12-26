import React from 'react';

import Header from './Header';
import Filtro from './Filtro';

const Search = () => {
  return (
    <div className='col py-3'>
      <Header title={ "ÁREA DE PESQUISA" }/>
      <Filtro />
    </div>
  );
}

export default Search;
