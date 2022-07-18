import React, { useState, useEffect } from "react";
import Image from "../components/image";
import "../styles/Home.module.css"
import { fetchAPI } from "../lib/api";
import Slider from "./carousel";


const Hero = () => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  const description = ["Pinta, sí, pero también canta, escribe, compone, descompone, esculpe y de vez en cuando, escupe palabras radiales.",
  "Ya no se acuerda dónde nació, pero sabe lo que le creció a orillas del río Pánuco, la imaginación, y lleva por sentado, una resistencia inusual y devota hacia la música, el teatro y el humor,  que se gestó en Xalapa; en el 2022, corre a la península por no salir de México y habitar sus orillas ,le queda de vicio, el abismo.",
  "Ha hecho, radio (Como veo doy, Máscara contra cabellera, Tacos de lengua, El triángulo de las no mudas, Deletréalo, y otros), televisión (Tras la noche, Mujeres hechas en casa, El Molcajete, y otros), teatro, cabaret, comedia, stand up, y las lasañas le quedan muy buenas.",
  "Es incapaz de realizar una fiesta infantil como lo dicta la etiqueta, pero los eventos los organiza muy bien, y hasta le pagan por ello. Así, la artista, entre pambazos, pinceles, lienzos en blanco, hijos, cazuelas y novios, se fue forjando a si misma al grado de no poder describir ni quién es, ni qué hace, pase usted, bienvenido al laberinto del artista."]

const props = {
    id:0,
    data: {
        attributes: {
            name: 'mercedes-boullosa.jpeg',
            alternativeText: 'mercedes',
            caption: 'Mercedes Boullosa',
            width: 698*5,
            height: 500*5,
            formats: [Object],
            hash: 'mercedes-boullosa',
            ext: '.jpeg',
            mime: 'image/jpeg',
            size:"500px",
            url: 'https://res.cloudinary.com/dvesljkuv/image/upload/v1656390537/bullo_galeria_75d6e75c04.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: [Object],
            createdAt: '2022-06-14T17:00:03.774Z',
            updatedAt: '2022-06-14T17:00:03.774Z'
          }
    }
}

  return (
    <>
    <div className="uk-container">
        <h1 className="title">La Boullosa Pinta</h1>
      </div>
    <section
      style={{
        padding: "0px",
        marginBottom: "30px",
      }}
    >

        {/* <div className="uk-container" >
          <Image image={props}
            alt="mercedes boullosa"
            priority={true}
            style={{position:"relative", layout:"responsive"}}
          />
        </div> */}
        <div className="uk-container" style={{ padding: "5px", display:"block"}}>
        <Slider />
        </div>

          {seeMore ? (
            <>{
            description.map((paragraph, i) =>(
            <>
                    <p id={i} style={{ fontSize: "1.2em", marginLeft: "20px", marginRight: "20px" }}>
                      {paragraph}

                    </p>
            </>
          ))}
          <button
                id="ver-menos"
                style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                onClick={(e) => handleSeeMore(e)}
              >
                Ver menos
              </button>
              </>

          ) : (
            <>
              <p id="description" style={{ fontSize: "1.2em", marginLeft: '20px' }}>
                {description[0].substring(0, 200)}..
                <button
                id="ver-mas"
                label="Ver más"
                onClick={(e) => handleSeeMore(e)}
                style={{ backgroundColor: "transparent", borderColor: "transparent" }}
              >
                Ver más
              </button>
              </p>
            </>
          )}
    </section>
    </>
  );
};

export default Hero;
