import React, {useState, useEffect, useContext} from 'react'
import ArticleCard from "../components/ArticleCard"
import ArticleState from "../context/Articles/ArticleState"
import ArticleContext from "../context/Articles/ArticleContext"

const Articles = ({ category, title }) => {
  console.log(category)
    const ctxArticles = useContext(ArticleContext);
    const {articlesID,
      articlesData,
        getArticlesID,
        getArticlesData,
        getArticle} = ctxArticles;

        const fetchData = async () => {
          await getArticlesID(category)
          await getArticlesData()
        }

    useEffect(() => {
      fetchData()
    }, []);

    if(!articlesData) return <div>Todavía no hay artículos! Regrese al menú principal</div>

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <h1 style={{ margin:"10px", textAlign:"center" }}>{title}</h1>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          {articlesData
          .filter((article)=> articlesID.includes(
          article.id))
          .map((article) => {
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