import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchButton.css'

const SearchButton = () => {
  return(
    <button className='search-button'>
      <FontAwesome
        name='search'
      />
    </button>
  )
};

export default SearchButton;