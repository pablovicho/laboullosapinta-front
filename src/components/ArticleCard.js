import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";

function ArticleCard(article) {
  const cover = article?.article.attributes.cover.data.attributes.formats.small.url
  const title = article?.article.attributes.title
  const description = article?.article.attributes.description
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  return seeMore
    ? article && (
        <Card>
          <a href={`/category/${article.id}`}>
            <Card.Img variant="top" src={cover} />
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
          <Card.Img variant="top" src={cover} className="categoryImage"/>
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
