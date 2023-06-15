import React, { useState } from 'react'

import Modal from './Modal'

import "./Image.css"

const Image = ({ info }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState()

    // console.log(enlarge)

    const handleImageClick = () => {
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };
  return (
    <div>
        {/* Image */}

        <img className='thumb' key={info.id} id={info.id} src={info.file} alt={info.description} onClick={handleImageClick}/>

        {modalOpen && (
            <Modal imageUrl={info.file} closeModal={closeModal} />
        )}
    </div>
  )
}

export default Image