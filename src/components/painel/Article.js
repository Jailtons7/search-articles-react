import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({article}) => {
  return (
    <div className='col mx-2'>
      <hr className='text-danger me-1'></hr>
      <Link to={{pathname: '/articles/' + article.CodArtigoPublicado}} className='mb-2 text-decoration-none'>{article.CodTitulosArtigos.DscTitulosArtigos}</Link>
      <p className='mb-2 text-secondary'>{article.CodServidor.NomServidor}</p>
      <p className='mb-2 text-secondary'>
        <strong>Instituição</strong>: {article.CodSiglaAtuacaoProfissionalLattes.CodSiglaOrgaoIE} <span className='ms-2 me-2'>|</span>
        <strong>Idioma</strong>: {article.CodIdioma.DscIdioma} <span className='ms-2 me-2'>|</span>
        <strong>Ano</strong>: {article.AnoPublicacaoArtigo}
      </p>
    </div>
  );
}

export default Article;
