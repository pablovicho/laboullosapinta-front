import React, { useState, useEffect, useCallback } from "react";
import mediaByIndex from "../utils/sliderMedia";
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';

// create a slider component with the src attributes from the mediaByIndex array

export const Slider = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = useCallback(
      (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e);
      },
      [setIndex, setDirection]
    );

  return (

  <Carousel activeIndex={index}
  direction={direction}
  onSelect={handleSelect}
  className='carousel'
  >
{mediaByIndex.map((media, i) => (
      <Carousel.Item key={i}>
      <img
        className= 'd-block carouselImage'
        src={media}
        alt={`slide ${i}`}
      />
    </Carousel.Item>
))
}

    </Carousel>
  )
}

export default Slider