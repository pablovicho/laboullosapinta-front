import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import ArticleContext from "../context/Articles/ArticleContext";
import extension from "../utils/extension";
import typeOfMedia from "../utils/type";
import MediaLoader from "../components/articles/MediaLoader";
import Slider from "../components/carousel";

const SingleArticle = () => {
    const { id } = useParams();
  const ctxArticles = useContext(ArticleContext);
  const { article, getArticle } = ctxArticles;
  let coverMedia;

  const fetchData = async () => {
    await getArticle(id).then(
      coverMedia = article.attributes?.media.data
    )
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  // return console.log(article)

  if (article === null || article === undefined || !article) {
    return <div>¡Este artículo no existe! Regrese al menú principal</div>;
  }

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <h1 style={{ margin: "10px", textAlign: "center" }}>{article.attributes?.title}</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}>
            {coverMedia && 
            article.attributes?.media.length > 1 ? 
            <Slider mediaArray={coverMedia.map((item)=> item.attributes.url)} /> :
            <MediaLoader type={typeOfMedia(coverMedia[0].attributes.url)} 
                          extension={extension(coverMedia[0].attributes.url)} 
                          media={coverMedia[0].attributes?.url}/>
            }
            <ReactMarkdown source={article.attributes?.content} escapeHtml={false} >{article.attributes?.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
