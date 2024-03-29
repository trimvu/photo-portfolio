import React, { useState } from 'react'

import Teddy_pics from "./Teddy.json"

import "./Teddy.css"

import Modal from '../Modal'
import Image from '../Image'

const Teddy = () => {

    console.log(Teddy_pics.length)

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
        <div className='contain-teddy page-height'>
            <br />
            <h1>Teddy</h1>

            <h3>Photos taken from: </h3>
            <p>22 August 2020 - </p>
            <p>These are photos that I have taken of my dog, Teddy. He is my pride and joy.</p>
            {"\n"}
            <ul>
                {
                    Teddy_pics && Teddy_pics.map((info, index) => {
                        return (
                            <li key={info.id}>
                                {/* {info.title} */}

                                {/* <br /> */}

                                {/* <img key={info.id} id={info.id} src={info.file} alt={info.description} onClick={() => {setModalOpen(true); setId(info.id); console.log(info.id)}} /> */}

                                <Image info={info} index={index} images={Teddy_pics} />

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