import { useReducer } from "react";

import axiosClient from "../../config/axios";
import ArticleContext from "./ArticleContext";
import ArticleReducer from "./ArticleReducer";

const ArticleState = (props) => {
  // 1. Estado inicial

  const initialState = {
    article: {},
    articlesData: [],
  };

  // 2. Configuración de reducer y creación del estado global
  const [globalState, dispatch] = useReducer(ArticleReducer, initialState);

  // 3. Funciones de cambio en estado global

  const getArticlesData = async (categoryID) => {
    const res = await axiosClient.get(
      `https://laboullosapinta.herokuapp.com/api/articles?filters[$and][0][category][id][$eq]=${categoryID}&populate=*`
    );
    const articlesData = res.data.data;
    // console.log("articles data: ", articlesData)
    localStorage.setItem("articlesData", articlesData);
    dispatch({
      type: "GET_ARTICLES_DATA",
      payload: articlesData,
    });
  }; 

  const getArticle = async (id) => {
    const res = await axiosClient.get(
      `https://laboullosapinta.herokuapp.com/api/articles/${id}?populate=*`
    );
    const article = res.data.data;
    console.log("article: ", article);
    localStorage.setItem("article", article);
    dispatch({
      type: "GET_ARTICLE",
      payload: article,
    });
  };

  // 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
  return (
    <ArticleContext.Provider
      value={{
        articlesData: globalState.articlesData,
        getArticle,
        getArticlesData,
        article: globalState.article
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
