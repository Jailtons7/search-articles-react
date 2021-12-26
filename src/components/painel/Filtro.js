import React, { useState } from 'react';

const Filtro = () => {
  const [placeholder, setPlaceholder] = useState("Título da publicação")

  const handleSelect = (e) => {
    setPlaceholder(e.target.options[e.target.selectedIndex].text);
  }

  return ( 
    <div className='mt-4 mb-5 ms-2'>
      <div className='row'>
        <div className='col-md-6'>
          <input type='text' className='form-control' id='articleTitle' name='articleTitle'
                placeholder={placeholder} />
        </div>
        <div className='col-md-3'>
          <select className='form-select' id='indices' name='indices'
                  onChange={handleSelect}>
            <option value='título' selected>Título da publicação</option>
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
  );
}

export default Filtro