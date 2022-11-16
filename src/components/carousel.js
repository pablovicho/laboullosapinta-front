import React, { useState, useCallback } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';

export const Slider = ({mediaArray}) => {
  // console.log(mediaArray)
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
{mediaArray.length > 1 && mediaArray.map((media, i) => (
      <Carousel.Item key={`slide ${i}`} interval={1500}>
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