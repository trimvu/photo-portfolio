import React from 'react'

import "./Slider.css"
import "./Modal.css"

const Slider = ({ imageUrl }) => {
  return (
    <div>
        <img className="modal-image" src={imageUrl} alt="Enlarged" />
    </div>
  )
}

export default Slider