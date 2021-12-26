import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='header mt-2 mx-2'>
      <h6 className='text-secondary'>
        { title }
      </h6>
      <hr className='text-danger me-1'></hr>
    </div>
  );
}

export default Header;
