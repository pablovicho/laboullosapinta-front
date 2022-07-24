import { useContext, useReducer } from "react"; //es como useState
import CategoriesContext from "./CategoriesContext";
import CategoriesReducer from "./CategoriesReducer";
import axiosClient from "../../config/axios";

const CategoriesState = (props) => {
  // 1. Estado inicial

  const initialState = {
    categories: [],
    singleCategory: {
      id: "",
      name: "",
      slug: "",
      description: "",
  }
}
  // 2. Configuración de reducer y creación del estado global
  const [globalState, dispatch] = useReducer(CategoriesReducer, initialState);

  // 3. Funciones de cambio en estado global
  const getCategories = async() => {
    const res = await axiosClient.get(`api/categories`)
    const list = res.data.data
    localStorage.setItem("categories", list)
    console.log("obteniendo categorías")
    dispatch({
      type: "GET_CATEGORIES",
      payload: list,
    });
  }

const getCategory = async(id) => {
  const res = await axiosClient.get(`api/categories/${id}`)
  const selectedCategory = res.data.data
dispatch({
  type:"GET_CATEGORY",
  payload:selectedCategory
})
}

  // 4. Retorno de todos los datos, el provider da acceso a la db
  return (
    <CategoriesContext.Provider
      value={{
        categories: globalState.categories,
        singleCategory: globalState.singleCategory,
        getCategory,
        getCategories,
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </CategoriesContext.Provider>
  );
};


export default CategoriesState;