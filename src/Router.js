import React, {useState, useEffect, useContext} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutState from './context/About/AboutState'
import AboutContext from './context/About/AboutContext'
import CategoriesState from './context/Categories/CategoriesState'
import CategoriesContext from './context/Categories/CategoriesContext'
import categories from './config/categories.json';
import Articles from './pages/Articles'

// 2. FUNCIÓN
const Router = () => {

	const [aboutData, setAboutData] = useState({});
    const [categoriesData, setCategoriesData] = useState({});
    const [error, setError] = useState(null);
    const ctxCategories = useContext(CategoriesContext);
    const ctxAbout = useContext(AboutContext);
    const categoryNames = categories.map(category => category.attributes.name);

    const loadAboutData = async () => {
    //   const res = ctxAbout.getAbout().catch(err => console.error("error loading about data: ", err));
    //   const data = res.data
    //   setAboutData(data)
    };

    // const loadCategoriesData = async () => {
    //   axios
    //   .get('https://laboullosapinta.herokuapp.com/api/categories')
    //   .then(({ data }) => setCategoriesData(data))
    //   .catch((error) => setError(error))
    // };

    // useEffect(() => {
    //   loadAboutData()
    //   loadCategoriesData()
    //   console.log("loading categories", categoriesData)
    // }, []);

    // if (error) {
    //   // Print errors if any
    //   return <div>An error occured: {error.message}</div>;
    // }



	return (
		<>
		<AboutState>
			<CategoriesState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
              {
                categories.map(category => {
                  console.log(category.attributes.slug)
                  return (
                    <Route path={`/${category.attributes.slug}`} element={<Articles />} category={category.attributes.slug}>
                    </Route>
                  )
                })
              }
							<Route path="*" element={<h1>Error 404. <br/> ¡Parece que la ruta no existe!</h1>}></Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</CategoriesState>
		</AboutState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router