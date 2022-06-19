import React, { useState } from "react";
import Image from "../components/image";
import "../styles/Home.module.css"


const Hero = () => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  const description = [
    'Mercedes Boullosa nació en una ciudad caótica, estudió de todo, y nada, enviudó antes de casarse dos veces, se casó dos veces, se divorció unas diez veces, es madre de cuatro, tía de todos, comadre de dos, pesadilla de varios, y le ha hecho a todo oficio, desde albañilería hasta la comadrería radial, porque llenar la canasta básica nunca fue sencillo pero siempre divertido, es por eso y por nada, que pinta. Porque las palabras un día no alcanzaron, porque la música era una bandera de dos sopas, y expresar, era urgente.', 'Primero le dio por pintar con todo lo que había en la cocina, hierbas, harina, pigmentos,después fue por pinceles y se puso las pilas, años más tarde, las pinturas salieron del lienzo, y esculpió madera, piedra, pero lo más, robó la basura de sus vecinos que convirtió en múltiples figuras y objetos de uso y desuso.', '“Parto sin dolor”, “la naturaleza sospecha”, “a Corazón abierto”, “Ardor”, “Lotería del corazón”, “Entre sábanas te veas”, “Jugando a la casita”, “Resistencia”, “Ciudades de ciertas”, “Ciudades desiertas”, son algunas de las series que Mercedes ha pintado, y esculpido, del 2000 a la fecha. Porque empezó tarde pero con prisa. No menciona a sus maestros por no avergonzarlos, pero los ha tenido.','Mercedes no se ha ganado un premio, ni se ha inscrito a convocatoria alguna. Nunca le han dado reconocimiento alguno y con la boca floja que tiene, lo más seguro, es que nunca lo hagan. Solo se sostiene de la trayectoria de su propio trabajo y de sus ventas. Le aterra el mercado del arte pero hela aquí, siendo valiente.'
]

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
            url: 'images/bullo-galeria.jpeg',
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

        <div className="uk-container" style={{ padding: "5px", display:"block"}}>
          <Image image={props}
            alt="mercedes boullosa"
            priority={true}
            style={{position:"relative", layout:"responsive"}}
          />
        </div>
          {seeMore ? (
            <>
              {description.map((paragraph, i) => {
                return (
                  <>
                    <p id={i} style={{ fontSize: "1.2em", margin: "0px" }}>
                      {paragraph}
                    </p>
                    <br />
                  </>
                );
              })}
              <button
                id="ver-menos"
                onClick={(e) => handleSeeMore(e)}
              >
                Ver menos
              </button>
            </>
          ) : (
            <>
              <p id="description" style={{ fontSize: "1.2em" }}>
                {description[0].substring(0, 200)}
              </p>
              <button
                id="ver-mas"
                label="Ver más"
                onClick={(e) => handleSeeMore(e)}
              >
                Ver más
              </button>
            </>
          )}
     
    </section>
    </>
  );
};

export default Hero;
