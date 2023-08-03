import React, { useState } from 'react'

import Modal from './Modal'

import "./Image.css"
import "./Modal.css"

const Image = ({ info, index, images }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState()

    // console.log(enlarge)

    // console.log(modalOpen)

    const handleClick = () => {

        if (modalOpen === false) {
            setModalOpen(true);
        } else if (modalOpen === true) {
            setModalOpen(false)
        }
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };
  return (
    <div>
        {/* Image */}

        <img className='thumb' key={info.id} id={info.id} src={info.file} alt={info.description} onClick={handleClick}/>

        {modalOpen && (
            <Modal handleClick={handleClick} modalOpen={modalOpen} index={index} images={images} />
        )}
    </div>
  )
}

export default Image