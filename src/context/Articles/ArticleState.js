// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO ARQUITECTURA DE FLUX

//

import { useReducer } from "react";
import ArticleContext from "./ArticleContext";
import ArticleReducer from "./ArticleReducer";
import axiosClient from "../../config/axios";

const ArticleState = (props) => {
  // 1. Estado inicial

  const initialState = {
    articlesID: [],
    articlesData: [],
  };

  // 2. Configuración de reducer y creación del estado global
  const [globalState, dispatch] = useReducer(ArticleReducer, initialState);

  // 3. Funciones de cambio en estado global

  const getArticlesID = async (categoryID) => {
    const res = await axiosClient.get(
      `https://laboullosapinta.herokuapp.com/api/articles/?category=${categoryID}`
    );
    const articles = res.data.data;
    const articlesID = articles.map((article) => article.id);
    localStorage.setItem("articlesID", articlesID);
    dispatch({
      type: "GET_ARTICLES_ID",
      payload: articlesID,
    });
  };


  const getArticlesData = async () => {
    const res = await axiosClient.get(
      `https://laboullosapinta.herokuapp.com/api/articles?populate=*`
    );
    const articlesData = res.data.data;
    console.log("articles data: ", articlesData)
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
        articlesID: globalState.articlesID,
        articlesData: globalState.articlesData,
        getArticlesID,
        getArticle,
        getArticlesData,
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
