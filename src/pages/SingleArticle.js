import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import ArticleContext from "../context/Articles/ArticleContext";
import extension from "../components/articles/extension";
import typeOfMedia from "../components/articles/type";
import MediaLoader from "../components/articles/MediaLoader";

const SingleArticle = () => {
    const { id } = useParams();
  const ctxArticles = useContext(ArticleContext);
  const { article, getArticle } = ctxArticles;

  const fetchData = async () => {
    await getArticle(id)
  };
  

  const title = article?.attributes?.title ? article.attributes.title : null
  const content = article?.attributes?.content ? article.attributes.content : null
  const media = article?.attributes?.media ? article.attributes.media.data : null
  

  useEffect(() => {
    fetchData();
  }, []);

  if (!article)
    return <div>¡Este artículo no existe! Regrese al menú principal</div>;

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <h1 style={{ margin: "10px", textAlign: "center" }}>{title}</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}>
            {media && media.map((item)=>{
              const url = item.attributes.url
              const ext = extension(url)
              const type = typeOfMedia(url)
              return (
                MediaLoader(type, ext, url))
            })}
            <ReactMarkdown source={content} escapeHtml={false} >{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
