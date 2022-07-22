import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutState from './context/About/AboutState'

// 2. FUNCIÓN
const Router = () => {

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