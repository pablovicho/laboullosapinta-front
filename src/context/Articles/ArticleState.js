// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO ARQUITECTURA DE FLUX

//

import { useContext, useReducer } from "react";
import ArticleContext from "./ArticleContext";
import ArticleReducer from "./ArticleReducer";
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

  // 3. Funciones de cambio en estado global

const getArticles = async(category) => {
  const res = await axiosClient.get(`https://laboullosapinta.herokuapp.com/api/categories/${category.id}`);
  const articles = res.data.data
  localStorage.setItem("articles", articles.data)
dispatch({
  type:"GET_ARTICLES",
  payload:articles
})
}

const getArticle = async(slug) => {
  const res = await axiosClient.get(`https://laboullosapinta.herokuapp.com/api/articles/${slug}`);
  const article = res.data.data
  localStorage.setItem("article", article.data)
  dispatch({
    type:"GET_ARTICLE",
    payload:article
    })
    }

  // 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
  return (
    <ArticleContext.Provider
      value={{
        articles: globalState.articles,
        getArticles,
        getArticle
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </ArticleContext.Provider>
  );
};


export default ArticleState;