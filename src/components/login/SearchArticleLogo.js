import React from 'react';

import searchArticles from "../../img/search_articles.png";

const SearchArticlesLogo = () => {
  return ( 
    <div className='col-sm-6 d-flex align-items-center'>
      <div className='px-3 py-2 p-md-5 mx-md-4'>
        <img className='mx-auto d-block mb-3' src={searchArticles} alt='Search Articles' />
        <p className='text-center'>
          Search Articles é um ferramenta que facilita a busca
          de artigos científicos.
        </p>
      </div>
    </div>
  );
}
 
export default SearchArticlesLogo;
