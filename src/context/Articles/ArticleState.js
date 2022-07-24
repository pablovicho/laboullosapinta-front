// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO ARQUITECTURA DE FLUX

//

import { useContext, useReducer } from "react"; //es como useState
import ArticleContext from "./ArticlesContext";
import ArticleReducer from "./ArticlesReducer";
import axiosClient from "../../config/axios";

const ArticleState = (props) => {
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
  const [globalState, dispatch] = useReducer(ArticleReducer, initialState);
  //dipatch es una fución que cambia el estado global, le da los datos reales al reducer para que haga su propia función

  // 3. Funciones de cambio en estado global
//datos reales que le vas a pasar para cambiar el estado global

const getArticles = async() => {
  const res = await axiosClient.get(`api/articles`)
  const articles = res.data.data
  localStorage.setItem("articles", articles.data)
dispatch({
  type:"GET_ARTICLES",
  payload:articles
})
}

  // 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
  return (
    <ArticleContext.Provider
      value={{
        //las llaves para llamar js; llama un objeto, con el valor de moods
        articles: globalState.articles,
        getArticles
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </ArticleContext.Provider>
  );
};


export default ArticleState;