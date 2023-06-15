import React, { useState } from 'react'

import Teddy_pics from "./Teddy.json"

import "./Teddy.css"

import Modal from '../Modal'
import Image from '../Image'

const Teddy = () => {

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
            Teddy

            <ul>
                {
                    Teddy_pics && Teddy_pics.map(info => {
                        return (
                            <li key={info.id}>
                                {/* {info.title} */}

                                {/* <br /> */}

                                {/* <img key={info.id} id={info.id} src={info.file} alt={info.description} onClick={() => {setModalOpen(true); setId(info.id); console.log(info.id)}} /> */}

                                <Image info={info} />

                                {/* {modalOpen && (
                                    <Modal id={id} imageUrl={info.file} closeModal={closeModal} />
                                )} */}

                                {/* <br /> */}
                                
                                {/* {info.description} */}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Teddy