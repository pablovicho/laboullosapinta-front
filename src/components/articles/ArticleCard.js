import React, { useState } from "react";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import extension from "../../utils/extension";
import typeOfMedia from "../../utils/type";
import MediaLoader from "./MediaLoader";
import Slider from "../carousel";

function ArticleCard(article) {
  console.log("article in card", article);

  const cover = article?.article?.attributes?.cover.data?.attributes.url
    ? article.article.attributes.cover.data.attributes.url
    : null;
  const title = article?.article.attributes.title;
  const description = article?.article.attributes.description;
  const mediaLink = article?.article.attributes.mediaLink;
  const media =
    article?.article.attributes.media.data &&
    article?.article.attributes.media.data;
  const mediaArray =
    media != null
      ? media.map((mediaX) => {
          return mediaX.attributes.url;
        })
      : null;

  // console.log("mediaArray in articleCard", mediaArray)
  const coverExt = extension(cover);
  const coverType = typeOfMedia(cover);

  return article && (
        <Card className="articleCard">
          {cover && (
            <MediaLoader
              type={coverType}
              extension={coverExt}
              media={cover}
            ></MediaLoader>
          )}
          {mediaLink && (
            <iframe
              height="120%"
              style={{ aspectRatio: 16 / 9, border: "none" }}
              src={mediaLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {mediaArray && mediaArray.length > 1 ? (
            <Slider mediaArray={mediaArray}></Slider>
          ) : (
            mediaArray && (
              <MediaLoader
                type={typeOfMedia(mediaArray[0])}
                extension={extension(mediaArray[0])}
                media={mediaArray[0]}
              ></MediaLoader>
            )
          )}

          <Card.Body>
            <Nav.Item className="cardTitleBox">
              <Nav.Link href={`/articles/${article.article.id}`}>
                <Card.Title className="cardTitle">{title}</Card.Title>
                <Card.Text
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  {description?.substring(0, 150)}

                      ...
                      <button
                        id="ver-mas"
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }}
                      >
                        Ver más
                      </button>

                </Card.Text>
              </Nav.Link>
            </Nav.Item>
          </Card.Body>
        </Card>
      );
}

export default ArticleCard;
