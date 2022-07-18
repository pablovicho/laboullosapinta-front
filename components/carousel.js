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
  style={{alignItems: "center", justifyContent: "center", marginTop: "20px"}}
  >
{mediaByIndex.map((media, i) => (
      <Carousel.Item key={i}>
      <img
        className="d-block img-fluid"
        src={media}
        alt={`slide ${i}`}
        style={{height: "600px", width: "100%", objectFit: "cover", objectPosition: "50% 10%"}}
      />
    </Carousel.Item>
))
}

    </Carousel>
  )
}

export default Slider