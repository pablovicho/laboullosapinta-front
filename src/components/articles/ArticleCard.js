import React, { useState } from "react";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav'
import extension from "../../utils/extension";
import typeOfMedia from "../../utils/type";
import MediaLoader from "./MediaLoader";
import Slider from "../carousel";


function ArticleCard(article) {
   console.log("article in card", article)

  const cover = article?.article?.attributes?.cover.data?.attributes.url ? article.article.attributes.cover.data.attributes.url : null
  const title = article?.article.attributes.title
  const description = article?.article.attributes.description
  const mediaLink = article?.article.attributes.mediaLink
  const media = article?.article.attributes.media.data && 
                article?.article.attributes.media.data
  const mediaArray = media != null ?   
    media.map(mediaX => {return mediaX.attributes.url})
    : null

  console.log("mediaArray in articleCard", mediaArray)     
  const coverExt = extension(cover)
  const coverType = typeOfMedia(cover)

  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  return seeMore ? article && (
    <Card className="articleCard">
      {
        cover && 
        <MediaLoader type={coverType} extension={coverExt} media={cover}>
        </MediaLoader>
      }
      {
        mediaLink && 
        <iframe height='120%'
        src={mediaLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      }
      {
        mediaArray && mediaArray.length > 1 ? 
        <Slider mediaArray={mediaArray}></Slider>
        : mediaArray &&
        <MediaLoader type={typeOfMedia(mediaArray[0])} extension={extension(mediaArray[0])} media={mediaArray[0]}>
        </MediaLoader>
      }
        
        
      <Card.Body>
      <Nav.Item>
          <Nav.Link href={`/articles/${article.article.id}`}>
          <Card.Title>{title}</Card.Title>
          </Nav.Link>
        </Nav.Item>

        <Card.Text style={{textAlign: "justify",
  textJustify: "inter-word"}}>{description}</Card.Text>
            {description.length > 150 && (
            <button
              id="ver-menos"
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              onClick={(e) => handleSeeMore(e)}
            >
              Ver menos
            </button>
            )}

      </Card.Body>
    </Card>
  )
      
    : article && (
        <Card className="articleCard">
          {
            cover && 
            <MediaLoader type={coverType} extension={coverExt} media={cover}>
            </MediaLoader>
          }
          {
            mediaLink && 
            <iframe height='120%'
            src={mediaLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          }
          {
            mediaArray && mediaArray.length > 1 ? 
            <Slider mediaArray={mediaArray}></Slider>
            : mediaArray &&
            <MediaLoader type={typeOfMedia(mediaArray[0])} extension={extension(mediaArray[0])} media={mediaArray[0]}>
            </MediaLoader>
          }
            
            
          <Card.Body>
          <Nav.Item>
              <Nav.Link href={`/articles/${article.article.id}`}>
              <Card.Title>{title}</Card.Title>
              </Nav.Link>
            </Nav.Item>
              
            
            <Card.Text style={{textAlign: "justify",
  textJustify: "inter-word"}}>
              {description?.substring(0, 150)}
              {description?.length > 150 && (
                <>
                ...
                <button
                  id="ver-mas"
                  onClick={(e) => handleSeeMore(e)}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  Ver más
                </button>
                </>
              )}
            </Card.Text>
          </Card.Body>
          
        </Card>
      );
}

export default ArticleCard;