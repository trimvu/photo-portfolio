import React from 'react'

import Japan2019_pics from "./Japan2019.json"

import "./Japan2019.css"

import Image from '../../Image'

const Japan2019 = () => {

    return (
        <div className='contain-japan'>
            <br />
            <h1>Japan 2019</h1>

            <h3>Photos taken from: </h3>
            <p>13 August 2019 - 24 August 2019</p>
            <p>Photos I took from my trip to Japan. These photos are my first time using a DSLR in a real-world setting.</p>
            {"\n"}
            <ul>
                {
                    Japan2019_pics && Japan2019_pics.map((info, index) => {
                        return (
                            <li key={info.id}>

                                <Image info={info} index={index} images={Japan2019_pics} />

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Japan2019