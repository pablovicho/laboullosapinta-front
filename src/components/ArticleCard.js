import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";

function ArticleCard(article) {
  console.log("article in articleCard: ", article)
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  return seeMore
    ? article && (
        <Card>
          <a href={`/category/${article.id}`}>
            <Card.Img variant="top" src={article?.attributes?.cover} />
          </a>
          <Card.Body>
            <Card.Title>{article?.attributes?.title}</Card.Title>
            <Card.Text>{article?.attributes?.description}</Card.Text>
            {article?.attributes?.description?.length > 150 && (
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
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={article?.attributes?.cover} />
          <Card.Body>
            <Card.Title>{article?.attributes?.name}</Card.Title>
            <Card.Text>
              {article?.attributes?.description?.substring(0, 150)}
              {article?.attributes?.description?.length > 150 && (
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
