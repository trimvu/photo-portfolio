import React, { useState, useEffect } from 'react';

import "./Modal.css"
import { CarouselItem } from './CarouselItem';

const Modal = ({ modalOpen, id, info, handleClick, index, images }) => {

  // console.log(modalOpen)

  const [currentIndex, setCurrentIndex] = useState(index)

  const changeIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1;
    }
    setCurrentIndex(newIndex)
  }

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
    <div className="modal">
      {/* <img className="modal-image" src={info.file} alt="Enlarged" /> */}
      {/* <Carousel className="modal-image" index={index} images={images} /> */}
      <div className='carousel'>
        <div className='inner' style={{ transform: `translate(-${currentIndex * 100}%)`}}>
          {images.map(item => {
            return <CarouselItem item={item} width={"100%"} />
          })}
        </div>
        <div className='carousel-btns'>
          <div className='indicators'>
            {images.map((item, index) => {
              return (
                <button className='indicator-pics' onClick={() => {changeIndex(index)}}>
                  <span className={`${index === currentIndex ? 'current-mini-pics' : 'mini-pics'}`}>
                    {<img src={item.file} className='mini' alt='mini version' />}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

      </div>

      <div className='change-btn'>
        <button className='left-btn' onClick={() => {changeIndex(currentIndex - 1)}}>
          <span>&lt;</span>{" "}
        </button>
        <button className='right-btn' onClick={() => {changeIndex(currentIndex + 1)}}>
          <span>&gt;</span>
        </button>
      </div>

      <span className="close-btn" onClick={handleClick}>&times;</span>
    </div>
  );
};

export default Modal;