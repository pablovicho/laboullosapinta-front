// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";

function ArticleCard(article) {
  // console.log(article)
  function ext (string) {
    return string.split('.').pop().toLowerCase();
  }

  const cover = article.article.attributes.cover.data.attributes.url
  // article?.article?.attributes?.cover?.data?.attributes?.formats?.small?.url ||
  const title = article?.article.attributes.title
  const description = article?.article.attributes.description
  const extension = ext(cover)
  const [seeMore, setSeeMore] = useState(false);
  const videoFormats = ["mp4", "mkv", "webm", "m4v", "mpeg4", "mpg", "mov", "mpg4"]
  const audioFormats = ["mp3", "wav", "wma", "aac", "wma", "aiff", "flac", "alac"]
  
  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  return seeMore

    ? article && (

        <Card>
          <a href={`/category/${article.id}`}>
            {
              extension === "jpg" || extension === "jpeg" || extension === "png" ? 
            <Card.Img variant="top"
            src={cover} 
            className="categoryImage" 
            loading="lazy"/>
               : 
            videoFormats.includes(extension) ?
              <video variant="top" controls>
                <source src={cover} type={`/video/${extension.substring(1)}`}/>
              </video>
                : 
          audioFormats.includes(extension) ?
            <audio variant="top"
            src={cover}
            controls/>    
                : null
}
          </a>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
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
        <Card className="categoryCard">
          {
              extension === "jpg" || extension === "jpeg" || extension === "png" ? 
            <Card.Img variant="top"
            src={cover} 
            className="categoryImage" 
            loading="lazy"/>
               : 
               videoFormats.includes(extension) ?
            <video variant="top" controls>
              <source src={cover} type={`video/${extension}`}/>
            </video>
                : 
                audioFormats.includes(extension) ?
          <audio variant="top"
          src={cover}
          controls/>    
                : null
}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
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
