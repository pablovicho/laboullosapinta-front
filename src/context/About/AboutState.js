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
  const [globalState, dispatch] = useReducer(AboutReducer, initialState);

  // 3. Funciones de cambio en estado global

const getAbout = async() => {
  const res = await axiosClient.get(`https://laboullosapinta.herokuapp.com/api/about`)
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
        about: globalState.about,
        getAbout
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </AboutContext.Provider>
  );
};


export default AboutState;