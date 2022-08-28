import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import 'bootstrap/js/dist/modal'
import { Modal } from 'bootstrap';

import UtilsServices from '../../utils/UtilsServices';
import { useHistory } from 'react-router-dom';

const ProfileFormEdit = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [phone, setPhone] = useState("")

  const history = useHistory()
  useEffect(() => {
    const header  = {
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    }
    const getUser = async (url) => {
      await axios.get(url, { headers: header })
      .then((response) => {
        if (response.status === 200) {
          setFirstName(response.data.first_name)
          setLastName(response.data.last_name)
          setEmail(response.data.email)
          setCpf(response.data.cpf)
          setPhone(response.data.phone)
        }
      })
    }

    getUser('http://localhost:8000/authentication/users/')
  }, [])

  const editProfile = async (url, dataObj) => {
    const header  = {
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    }
    await axios.put(url, dataObj, {headers: header})
    .then((response) => {
      if (response.status === 200) {
        setFirstName(response.data.first_name)
        setLastName(response.data.last_name)
        setEmail(response.data.email)
        setCpf(response.data.cpf)
        setPhone(response.data.phone)
        toast.success("Usuário editado com sucesso")
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = UtilsServices.formValidation(e)
    if (isValid) {
      const dataObj = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        cpf: cpf,
        phone: phone
      }
      editProfile('http://localhost:8000/authentication/users/update/', dataObj)
    }
  }

  const handleDelete = async (e) => {
    const header  = {
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    }
    await axios.delete('http://localhost:8000/authentication/users/delete/', {headers: header})
    
    let modal = Modal.getInstance(document.getElementById('deleteAccountModal'))
    modal.hide()
    history.push('/login')
  }

  return ( 
    <>
      <form method='POST' noValidate onSubmit={handleSubmit}>
        <div className='form-outline w-75 ms-2 mt-5'>
          <label htmlFor='id_name' className='text-secondary'>Nome</label>
          <input type='text' className='form-control mt-1' name='first_name' id='id_first_name' required
                 onChange={(e) => {setFirstName(e.target.value)}} value={firstName} />
        </div>
        <div className='form-outline w-75 ms-2 mt-2'>
          <label htmlFor='id_name' className='text-secondary'>Sobrenome</label>
          <input type='text' className='form-control mt-1' name='last_name' id='id_last_name' required
                 onChange={(e) => {setLastName(e.target.value)}} value={lastName} />
        </div>
        <div className='form-outline w-75 ms-2 mt-2'>
          <label htmlFor='id_email' className='text-secondary'>E-mail</label>
          <input type='text' className='form-control mt-1' name='email' id='id_email' required
                 onChange={(e) => {setEmail(e.target.value)}} value={email} />
        </div>
        <div className='form-outline w-75 ms-2 mt-2'>
          <label htmlFor='id_phone' className='text-secondary'>Telefone</label>
          <input type='text' className='form-control mt-1' name='phone' id='id_phone'
                 onChange={(e) => {setPhone(e.target.value)}} value={phone} />
        </div>
        <div className='form-outline w-75 ms-2 mt-2'>
          <label htmlFor='id_cpf' className='text-secondary'>CPF</label>
          <input type='text' className='form-control mt-1' name='cpf' id='id_cpf' required
                 onChange={(e) => {setCpf(e.target.value)}} value={cpf} />
        </div>
        <div className='w-75 mt-3 ms-2'>
          <button className='btn btn-primary float-end me-0 ms-2 w-25' type='submit'>Salvar</button>
          <button className='btn btn-danger float-end me-0 ms-2 w-25' type='button'
                  data-bs-toggle="modal" data-bs-target="#deleteAccountModal">Excluir Conta</button>
          <button className='btn btn-secondary float-end w-25' type='button'>Cancelar</button>
        </div>
      </form>

      <div className="modal fade" id="deleteAccountModal" tabIndex="-100" aria-labelledby="deleteAccountModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h5 className="text-center modal-title" id="deleteAccountModalLabel">Deletar Conta</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>ATENÇÂO: Esta ação é definitiva e não teremos como recuperar a sua conta.</p>
              <p><strong>Tem certeza que deseja deletar sua conta permanentemente?</strong></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" onClick={handleDelete} className="btn btn-danger">Deletar</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
 
export default ProfileFormEdit;
