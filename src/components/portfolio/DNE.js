import React from 'react'

import Teddy_pics from "./Teddy/Teddy.json"

import "./DNE.css"

const DNE = () => {
    // console.log(Teddy_pics[1].file)
  return (
    <div className='dne-contain'>
        <h1>The page you are looking for DOES NOT EXIST!</h1>

        <p>Here is an image of Teddy!</p>

        <img src={Teddy_pics[1].file} className='dne-img' />
    </div>
  )
}

export default DNE