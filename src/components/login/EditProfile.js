import React from 'react';

import Menu from '../painel/Menu';
import Header from '../painel/Header';
import ProfileFormEdit from './ProfileFormEdit';

const EditProfile = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Menu />
        <div className='col py-3'>
          <Header title={ "EDITAR PERFIL" }/>
          <ProfileFormEdit />
        </div>
      </div>
    </div>
  );
}
 
export default EditProfile;
