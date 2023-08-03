import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
// import Teddy_pics from "./Teddy/Teddy.json"
export const Carousel = ({ index, images }) => {
  const [activeIndex, setActiveIndex] = useState(index);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="App">
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {images.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        <div className="indicators">
          {images.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  {<img src={item.file} className="mini" />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
        
    </div>

        <div className="arrow">
            <button
                className="button-arrow-left"
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
            >
                <span class="material-symbols-outlined">&lt;</span>{" "}
            </button>
            <button
                className="button-arrow-right"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
            >
                <span class="material-symbols-outlined">&gt;</span>
            </button>
        </div>

    </div>
  );
};