import React, { useEffect, useContext } from "react";
import ArticleCard from "../components/ArticleCard";
import ArticleContext from "../context/Articles/ArticleContext";

const Articles = ({ category, title }) => {
  const ctxArticles = useContext(ArticleContext);
  const { articlesData, getArticlesData } =
    ctxArticles;

  const fetchData = async () => {
    await getArticlesData(category).then(
    console.log("articles from query in Articles: ",articlesData)
    )
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (articlesData=== null || articlesData === undefined || articlesData.length < 1)
    return <div>Todavía no hay artículos! Regrese al menú principal</div>;

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <h1 style={{ margin: "10px", textAlign: "center" }}>{title}</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {articlesData
            .map((article) => {
              return (
                <ArticleCard
                  article={article}
                  key={`article__${article.attributes.slug}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
