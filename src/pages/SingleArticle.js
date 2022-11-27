import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import ArticleContext from "../context/Articles/ArticleContext";

import extension from "../utils/extension";
import typeOfMedia from "../utils/type";
import writeClipImg from "../utils/clipboard";

import MediaLoader from "../components/articles/MediaLoader";
import SliderOrMedia from "../components/SliderOrMedia";

const SingleArticle = () => {
  const { id } = useParams();
  const { article, getArticle } = useContext(ArticleContext);
  const currentUrl = window.location.href;
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      await getArticle(id);
    };
    dataFetch();
  }, []);

  const handleClick = () => {
    setIsCopied(true);
    writeClipImg(currentUrl)
      
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
  }

  if (
    article.attributes === null ||
    article.attributes === undefined ||
    !article.attributes
  ) {
    return <div>¡Este artículo no existe! Regrese al menú principal</div>;
  }

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <h1 style={{ margin: "10px", textAlign: "center" }}>
          {article.attributes && article.attributes.title}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="articleCard">
            {article.attributes.cover && article.attributes.cover.data && (
              <MediaLoader
                type={typeOfMedia(article.attributes.cover.data.attributes.url)}
                extension={extension(
                  article.attributes.cover.data.attributes.url
                )}
                media={article.attributes.cover.data.attributes.url}
              ></MediaLoader>
            )}
          </div>
          {article.attributes.mediaLink && (
            <iframe
              className="mediaLink"
              src={article.attributes.mediaLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          <SliderOrMedia media={article.attributes.media.data} />

          {article.attributes.content && (
            <ReactMarkdown className="contentDescription">
              {article.attributes.content}
            </ReactMarkdown>
          )}
          {article.attributes.description && (
            <ReactMarkdown className="contentDescription">
              {article.attributes.description}
            </ReactMarkdown>
          )}
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <FacebookShareButton className='shareButton' url={currentUrl}>
              <FacebookIcon size={36} round={true}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton className='shareButton' url={currentUrl}>
              <TwitterIcon size={36} round={true}></TwitterIcon>
            </TwitterShareButton>
            <WhatsappShareButton className='shareButton' url={currentUrl}>
              <WhatsappIcon size={36} round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <button className='shareButton' style={{border:'none', background:'none'}} onClick={handleClick()}>
              <img src="/shareIcon.png" alt="shareButton"
              style={{height:'36px', width:'36px'}}/>
            </button>
            {isCopied && 
              <span>Copied!</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
