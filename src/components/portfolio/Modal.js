import React, { useEffect } from 'react';

import "./Modal.css"

const Modal = ({ id, info, handleClick }) => {

  // console.log(modalOpen)

  useEffect(() => {
    function handleEscape(e) {
      if (e.code === 'Escape') {
        handleClick()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div id={id} className='modal'>
      <img className="modal-image" src={info.file} alt="Enlarged" />
      <span className="close" onClick={handleClick}>&times;</span>
    </div>
  );
};

export default Modal;