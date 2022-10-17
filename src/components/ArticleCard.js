import React, { useState } from "react";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav'
import extension from "../utils/extension";
import typeOfMedia from "../utils/type";
import MediaLoader from "./articles/MediaLoader";
import Slider from "./carousel";


function ArticleCard(article) {
   console.log("article in card", article)

  const cover = article?.article?.attributes?.cover.data?.attributes.url ? article.article.attributes.cover.data.attributes.url : null
  const title = article?.article.attributes.title
  const description = article?.article.attributes.description
  const media = article?.article.attributes.media.data.map(mediaX => {return mediaX.attributes.url})

  const coverExt = extension(cover)
  const coverType = typeOfMedia(cover)

  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  return seeMore ? article && (

        <Card className="articleCard">
            
            {
            media.length > 1 ? 
            <Slider mediaArray={media}></Slider>
            :
            <MediaLoader type={coverType} extension={coverExt} media={cover}>
            </MediaLoader>
          }
          <Card.Body>
          <Nav.Item>
              <Nav.Link href={`/articles/${article.article.id}`}>
              <Card.Title>{title}</Card.Title>
              </Nav.Link>
            </Nav.Item>
            
            <Card.Text>{description}</Card.Text>
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
            media.length > 1 ? 
            <Slider mediaArray={media}></Slider>
            :
            <MediaLoader type={coverType} extension={coverExt} media={cover}>
            </MediaLoader>
          }
            
            
          <Card.Body>
          <Nav.Item>
              <Nav.Link href={`/articles/${article.article.id}`}>
              <Card.Title>{title}</Card.Title>
              </Nav.Link>
            </Nav.Item>
              
            
            <Card.Text>
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
