import React, { useState, useEffect } from 'react';

import Menu from './painel/Menu';
import Search from './painel/Search';
import Articles from './painel/Articles';
import axios from 'axios';

const Home = () => {
  const [articles, setArticles] = useState({
    count: 0,
    next: null,
    prev: null,
    results: [
      {
        CodArtigoPublicado: 0,
        ART: 0,
        TipArtigoRelevancia: null,
        TipArtigoDivulgacaoCientifica: null,
        AnoPublicacaoArtigo: null,
        CodSiglaAtuacaoProfissionalLattes: {},
        CodIssn: {},
        CodTitulosArtigos: {},
        CodIdioma: {},
        CodServidor: {},
      }
    ]
  })

  useEffect(() => {
    const fetchArticles = async (url) => {
      const {data} = await axios.get(
        "http://localhost:8000/api/v1/articles/"
      )
      setArticles(data)
    }

    fetchArticles()
  }, [])

  return ( 
    <div className='container-fluid'>
      <div className='row'>
        <Menu />
        <div className='col'>
          <Search articles={articles} setArticles={setArticles}/>
          <Articles articles={articles.results}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
