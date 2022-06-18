import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  console.log("category", article.attributes.category.data)
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.cover} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes?.category?.name}
            </p>
            <p id="description" className="uk-text-large">
              {article.attributes.description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card

