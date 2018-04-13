import React from 'react';
import FontAwesome from 'react-fontawesome';
import './AddProjectButton.css'

const AddProjectButton = () => {
  return (
    <button
      className='add-project-button'
    >
      Add
      <FontAwesome
        className='add-project-button-icon'
        name='plus'
      />
    </button>
  )
};

export default AddProjectButton;