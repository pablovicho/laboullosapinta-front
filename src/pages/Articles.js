import React, {useState, useEffect, useContext} from 'react'
import ArticleCard from "../components/ArticleCard"
import ArticleState from "../context/Articles/ArticleState"
import ArticleContext from "../context/Articles/ArticleContext"

const Articles = ({ category }) => {
  console.log("category in Articles", category)

    const ctxArticles = useContext(ArticleContext);
    const {articles,
        getArticles,
        getArticle} = ctxArticles;

        const fetchData = async () => {
          await getArticles(category).then(
            articles.forEach(article=>fetchArticle(article))
          )
        }

        const fetchArticle = async (article) => {
          return await getArticle(article.id)
        }

    useEffect(() => {
      fetchData()
    }, []);

    if(!articles) return <div>Todavía no hay artículos! Regrese al menú principal</div>

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