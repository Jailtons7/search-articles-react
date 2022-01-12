import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Article = ({article}) => {
  return (
    <div className='col mx-2'>
      <hr className='text-danger me-1'></hr>
      <Link className='mb-2 text-decoration-none' to=''>{article.CodTitulosArtigos.DscTitulosArtigos}</Link>
      <p className='mb-2 text-secondary'>{article.CodServidor.NomServidor}</p>
      <p className='mb-2 text-secondary'>
        <strong>Instituição</strong>: {article.CodSiglaAtuacaoProfissionalLattes.CodSiglaOrgaoIE} | 
        <strong>Idioma</strong>: {article.CodIdioma.DscIdioma} | 
        <strong>Ano</strong>: {article.AnoPublicacaoArtigo}
      </p>
    </div>
  );
}

export default Article;
