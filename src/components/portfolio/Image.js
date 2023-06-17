import React, { useState } from 'react'

import Modal from './Modal'

import "./Image.css"

const Image = ({ info }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState()

    // console.log(enlarge)

    const handleClick = () => {
        if (modalOpen === false) {
            setModalOpen(!modalOpen);
        } else if (modalOpen === true) {
            setModalOpen(!modalOpen)
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
            <Modal info={info} handleClick={handleClick} modalOpen={modalOpen} />
        )}
    </div>
  )
}

export default Image