import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import Menu from './painel/Menu';
import Search from './painel/Search';
import Articles from './painel/Articles';
import axios from 'axios';
import './PaginationStyle.css'
import { toast, ToastContainer } from 'react-toastify';

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
  const [totPages, setTotPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [pagination, setPagination] = useState(20)

  useEffect(() => {
    const header  = {
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    }

    const fetchArticles = async (url) => {
      const {data} = await axios.get(
        "http://localhost:8000/api/v1/articles/", {headers: header}
      )
      setArticles(data)
      setTotPages(Math.ceil(data.count / data.results.length))
      setTotalResults(data.count)
      setPagination(data.results.length)
      toast.success('Encontrados ' + data.count + ' artigos')
    }

    fetchArticles()
  }, [])

  const handlePageClick = async (e) => {
    const offset = (e.selected * pagination)
    const {data} = await axios.get(
      "http://localhost:8000/api/v1/articles/?limit=" + pagination + '&offset=' + offset 
    )
    setArticles(data)
  }

  return ( 
    <div className='container-fluid'>
      <div className='row'>
        <Menu />
        <div className='col'>
          <Search articles={articles} setArticles={setArticles}/>
          <Articles articles={articles.results}/>
          <nav aria-label="Page navigation example">
            <ReactPaginate 
              breakLabel="..."
              nextLabel=" > "
              previousLabel=" < "
              pageRangeDisplayed={3}
              pageCount={totPages}
              onPageChange={handlePageClick}
              containerClassName='pagination justify-content-center'
              activeClassName='active'
              pageClassName='page-item'
              pageLinkClassName='page-link'
            />
          </nav>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
