import React from 'react';
import FontAwesome from 'react-fontawesome';
import './NotificationButton.css'

//components
import IconMarker from "../../IconMarker/IconMarker";

const NotificationButton = () => {
  return(
    <button className='notification-button wrapper-marker notification-button-marker'>
      <FontAwesome
        name='bell'
      />
      <IconMarker/>
    </button>
  )
};


export default NotificationButton;