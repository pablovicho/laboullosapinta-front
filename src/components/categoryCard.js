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
        <Card className="categoryCard">
          <a href={`/${data.attributes.slug}`}>
            <Card.Img variant="top" src={data?.attributes?.cover.data.attributes.formats.small.url ||
            data?.attributes?.cover.data.attributes.url} 
            className="categoryImage"
            />
          </a>
          <Card.Body>
            <Card.Title>{data?.attributes?.name}</Card.Title>
            <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-word'}}>{data?.attributes?.description}
            {data?.attributes?.description?.length > 150 && (
              <button
                id="ver-menos"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: "#336699"
                }}
                onClick={(e) => handleSeeMore(e)}
              >
                Ver menos
              </button>
            )}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    : category && (
        <Card className="categoryCard">
          <a href={`/${data.attributes.slug}`}>
            <Card.Img variant="top" src={data?.attributes?.cover.data.attributes.formats.small.url || 
            data?.attributes?.cover.data.attributes.url
          } 
            className="categoryImage"/>
          </a>
          <Card.Body>
            <Card.Title>{data?.attributes?.name}</Card.Title>
            <Card.Text style={{ textAlign: 'justify', textJustify: 'auto'}}>
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
                      color: "#336699"
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
