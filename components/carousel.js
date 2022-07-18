import React, { useState, useEffect, useCallback } from "react";
import { mediaByIndex } from "./sliderMedia/index";
import Image from "next/image";
import "../assets/css/embla.module.css";
import Carousel from 'react-bootstrap/Carousel';

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

  >

      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[0]}
          alt={`slide 1`}
          style={{ height: '100px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[1]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[2]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[3]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[4]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[5]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[6]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[7]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[8]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[9]}
          alt={`slide 1`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={mediaByIndex[10]}
          alt={`slide 1`}
        />
      </Carousel.Item>

    </Carousel>
  )
}

export default Slider