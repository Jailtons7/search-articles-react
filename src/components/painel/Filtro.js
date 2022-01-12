import React, { useState } from 'react';
import axios from 'axios';

const Filtro = (props) => {
  const [placeholder, setPlaceholder] = useState("Título da publicação")
  const [nameInput, setNameInput] = useState("titulo")

  const handleSelect = (e) => {
    setPlaceholder(e.target.options[e.target.selectedIndex].text);
    setNameInput(e.target.value)
  }

  const fetchArticles = async (url) => {
    const {data} = await axios.get(
      url
    )
    props.setArticles(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form_ = document.getElementById("articleSearch")

    fetchArticles('http://localhost:8000/api/v1/articles/?' + form_.name + '=' + form_.value)
  }

  return (
    <form method='get' onSubmit={handleSubmit}>
    <div className='mt-4 mb-5 ms-2'>
      <div className='row'>
        <div className='col-md-6'>
          <input type='text' className='form-control' id='articleSearch' name={nameInput}
                placeholder={placeholder} />
        </div>
        <div className='col-md-3'>
          <select className='form-select text-secondary' id='indices' name='indices'
                  onChange={handleSelect}>
            <option value='titulo' selected>Título da publicação</option>
            <option value='ano'>Ano da publicação</option>
            <option value='autor'>Autor da publicação</option>
          </select>
        </div>
        <div className='col-md-3'>
          <button className='btn btn-danger' type='submit'>
            <span className='me-0 me-lg-4'>BUSCAR</span>
            <i className='ms-3 bi bi-search'></i>
          </button>
        </div>
      </div>
    </div>
    </form>
  );
}

export default Filtro