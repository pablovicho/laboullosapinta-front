import React, {useState, useEffect} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutState from './context/About/AboutState'
import axiosClient from './config/axios';

// 2. FUNCIÓN
const Router = () => {

	const [aboutData, setAboutData] = useState({});
    const [categoriesData, setCategoriesData] = useState({});

    const loadAboutData = async () => {
      const res = await axiosClient.get('https://laboullosapinta.herokuapp.com/api/about')
      .catch(err => console.log("error getting About information", err));
      const data = res.data.data.attributes
      setAboutData(data)
    };

    const loadCategoriesData = async () => {
      const res = await axiosClient.get('https://laboullosapinta.herokuapp.com/api/categories')
      .catch(err => console.log("error getting categories information", err));
      const data = res.data.data
      setCategoriesData(data)
    };

	useEffect(() => {
		loadAboutData()
		loadCategoriesData()
		console.log("primera categoría", categoriesData[0])
	  }, []);

	return (
		<>
		<AboutState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="*" element={<h1>Error 404. <br/> ¡Parece que la ruta no existe!</h1>}></Route>
						</Route>
					</Routes>
				</BrowserRouter>
		</AboutState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router