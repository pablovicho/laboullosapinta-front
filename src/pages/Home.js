import React, {useContext, useEffect} from 'react'
// import AboutContext from '../context/About/AboutContext'
import CategoriesContext from '../context/Categories/CategoriesContext'
import Slider from '../components/carousel';
import CategoryCard from '../components/categoryCard';
// import categories from '../config/categories.json';

export default function Home() {
    const description = ["Pinta, sí, pero también canta, escribe, compone, descompone, esculpe y de vez en cuando, escupe palabras radiales.",
    "Ya no se acuerda dónde nació, pero sabe lo que le creció a orillas del río Pánuco, la imaginación, y lleva por sentado, una resistencia inusual y devota hacia la música, el teatro y el humor,  que se gestó en Xalapa; en el 2022, corre a la península por no salir de México y habitar sus orillas ,le queda de vicio, el abismo.",
    "Ha hecho, radio (Como veo doy, Máscara contra cabellera, Tacos de lengua, El triángulo de las no mudas, Deletréalo, y otros), televisión (Tras la noche, Mujeres hechas en casa, El Molcajete, y otros), teatro, cabaret, comedia, stand up, y las lasañas le quedan muy buenas.",
    "Es incapaz de realizar una fiesta infantil como lo dicta la etiqueta, pero los eventos los organiza muy bien, y hasta le pagan por ello. Así, la artista, entre pambazos, pinceles, lienzos en blanco, hijos, cazuelas y novios, se fue forjando a si misma al grado de no poder describir ni quién es, ni qué hace, pase usted, bienvenido al laberinto del artista."]


    // const aboutContext = useContext(AboutContext);
    // const {about, getAbout} = aboutContext;
    const categoriesContext = useContext(CategoriesContext);
    const {categories, getCategories} = categoriesContext;

    const fetchData = async () => {
      await getCategories()
    }

    useEffect( () => {
     fetchData()
  }, []);

    return (
        <div>
            <h1 id='title'>La  Boullosa Pinta</h1>
            <Slider/>
            <div style={{margin: '10px'}}>
            {
            description.map((paragraph, i) =>(
            <>
                    <p key={i} style={{textAlign: 'justify', justifyContent: 'space-evenly'}}>
                      {paragraph}

                    </p>
            </>
          ))}
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {
                categories.map((category) =>{
                  return(
                    <div style={{marginTop: '15px'}} key={category.id}>
                    <CategoryCard category={category}/>
                  </div>
                  )
                })
            }
          </div>
        </div>
    )
}