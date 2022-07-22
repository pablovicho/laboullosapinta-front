// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO ARQUITECTURA DE FLUX

//

import { useContext, useReducer } from "react"; //es como useState
import AboutContext from "./AboutContext";
import AboutReducer from "./AboutReducer";
import axiosClient from "../../config/axios";

const AboutState = (props) => {
  // 1. Estado inicial

  const initialState = {
    data: {
      id: "",
      attributes: {
        title: "",
      },
	    meta: {},
  }
}

  // 2. Configuración de reducer y creación del estado global
  const [globalState, dispatch] = useReducer(AboutReducer, initialState); //AboutReducer son todas las funciones que van a alterar el estado inicial
  //dipatch es una fución que cambia el estado global, le da los datos reales al reducer para que haga su propia función

  // 3. Funciones de cambio en estado global
//datos reales que le vas a pasar para cambiar el estado global

const getAbout = async() => {
  const res = await axiosClient.get(`api/about`)
  const about = res.data.data
  localStorage.setItem("about", about)
dispatch({
  type:"GET_ABOUT",
  payload:about
})
}

  // 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
  return (
    <AboutContext.Provider
      value={{
        //las llaves para llamar js; llama un objeto, con el valor de moods
        about: globalState.about,
        getAbout
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </AboutContext.Provider>
  );
};


export default AboutState;