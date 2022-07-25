import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";

function CategoryCard(category) {
  const data = category.category;
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  return seeMore
    ? category && (
        <Card className="categoryImage" style={{ width: "18rem", marginLeft: "10px", marginTop: "10px", height: "fit-content" }}>
          <a href={`/${data.attributes.slug}`}>
            <Card.Img variant="top" src={data?.attributes?.cover}
            />
          </a>
          <Card.Body>
            <Card.Title>{data?.attributes?.name}</Card.Title>
            <Card.Text>{data?.attributes?.description}</Card.Text>
            {data?.attributes?.description?.length > 150 && (
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
    : category && (
        <Card style={{ width: "18rem" }}>
          <a href={`/${data.attributes.slug}`}>
            <Card.Img variant="top" src={data?.attributes?.cover} 
            className="categoryImage"/>
          </a>
          <Card.Body>
            <Card.Title>{data?.attributes?.name}</Card.Title>
            <Card.Text>
              {data?.attributes?.description?.substring(0, 150)}
              {data?.attributes?.description?.length > 150 && (
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

export default CategoryCard;
