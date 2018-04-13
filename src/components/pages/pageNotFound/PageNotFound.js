import React from 'react';
import NotFound from '../../../assets/img/page404.png'
import './PageNotFound.css'

const PageNotFound = () => {
  return(
        <div className="page404">
          <img src={NotFound} alt="Page not found"/>
        </div>
  )
};

export default PageNotFound;