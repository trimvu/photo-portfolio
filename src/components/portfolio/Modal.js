import React, { useEffect } from 'react';

import "./Modal.css"

const Modal = ({ id, imageUrl, closeModal }) => {

  useEffect(() => {
    function handleEscape(e) {
      if (e.code === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div id={id} className="modal">
      <img className="modal-image" src={imageUrl} alt="Enlarged" />
      <span className="close" onClick={closeModal}>&times;</span>
    </div>
  );
};

export default Modal;