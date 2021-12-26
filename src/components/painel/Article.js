import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Article = ({article}) => {
  return (
    <div className='col mx-2'>
      <hr className='text-danger me-1'></hr>
      <Link className='mb-2' to=''>{article.title}</Link>
      <p className='mb-2'>{article.autor}</p>
      <p className='mb-2'>Resumo: {article.resumo} | Idioma: {article.idioma}</p>
    </div>
  );
}

export default Article;
