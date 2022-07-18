import React, { useState } from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };
  return (

      <div className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.cover} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes?.category?.name}
            </p>

            {seeMore ? (
              <>
                <p id="description" className="uk-text-large">
                  {article.attributes.description}
                </p>
                <button id="ver-menos"  
                  style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                  onClick={(e) => handleSeeMore(e)}>Ver menos</button>
              </>
            ) : (
              article.attributes.description && (
              <>
                <p id="description" className="uk-text-large">
                  {article?.attributes?.description?.substring(0, 200)
                  + "..."}
                   <button id="ver-mas" 
                   onClick={(e) => handleSeeMore(e)}
                   style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                   >Ver más</button>
                </p>
              </>
              )
            )}
          </div>
        </div>
      </div>
  );
};

export default Card;
