import React from 'react';

const ProfileFormEdit = () => {
  return ( 
    <>
      <form>
        <div className='form-outline w-75 ms-2 mt-5'>
          <label htmlFor='id_name' className='text-secondary'>Nome</label>
          <input type='text' className='form-control mt-1' name='name' id='id_name' />
        </div>
        <div className='form-outline w-75 ms-2 mt-2'>
          <label htmlFor='id_email' className='text-secondary'>E-mail</label>
          <input type='text' className='form-control mt-1' name='email' id='id_email' />
        </div>
        <div className='form-outline w-75 ms-2 mt-2'>
          <label htmlFor='id_phone' className='text-secondary'>Telefone</label>
          <input type='text' className='form-control mt-1' name='phone' id='id_phone' />
        </div>
        <div className='w-75 mt-3 ms-2'>
          <button className='btn btn-success float-end me-0 ms-2 w-25' type='button'>Salvar</button>
          <button className='btn btn-warning float-end w-25' type='button'>Cancelar</button>
        </div>
      </form>
    </>
  );
}
 
export default ProfileFormEdit;
