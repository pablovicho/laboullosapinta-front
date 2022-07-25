import React, {useState, useEffect, useContext} from 'react'
import ArticleCard from "../components/ArticleCard"
import ArticleState from "../context/Articles/ArticleState"
import ArticleContext from "../context/Articles/ArticleContext"

const Articles = ({ category }) => {

    const [articlesData, setArticlesData] = useState({});
    const ctxArticles = useContext(ArticleContext);
    const {articles,
        getArticles,
        getArticle} = ArticleState

    useEffect(() => {
      getArticles(category.id)
      console.log("loading articles... ,", articlesData)
    }, []);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {articles.map((article) => {
            return (
              <ArticleCard
                article={article}
                key={`article__${article.attributes.slug}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles