import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CategoriesState from './context/Categories/CategoriesState'
import ArticleState from './context/Articles/ArticleState'
import categories from './config/categories.json';
import Articles from './pages/Articles'
import SingleArticle from './pages/SingleArticle'

// 2. FUNCIÓN
const Router = () => {

	return (
		<>
			<CategoriesState>
				<ArticleState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path={"/articles/:id"} 
								element={<SingleArticle/>}>
							</Route>
			  {
                categories.map(category => {
                  return (
                    <Route path={`/${category.attributes.slug}`}
                    element={<Articles category={category.id} title={category.attributes.name}/>}
                    key={category.attributes.slug}>
                    </Route>
                  )
                })
              }
							<Route path="*" element={<h1>Error 404. <br/> ¡Parece que la ruta no existe!</h1>}></Route>
						</Route>
					</Routes>
				</BrowserRouter>
				</ArticleState>
			</CategoriesState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router