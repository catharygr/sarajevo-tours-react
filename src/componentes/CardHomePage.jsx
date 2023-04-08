/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function CardHomePage({ card }) {
  const { url, title, summary, description, imgUrl } = card;
  const randomDeg = Math.random() * 10 - 5;
  return (
    <div
      style={{ transform: `rotate(${randomDeg}deg)` }}
      className="home-card-container"
    >
      <Link to={url}>
        <article className="home-card-article">
          <h3 className="ff-title color-white">{title}</h3>
          <img src={imgUrl} alt="" />
          {description && <p>{description}</p>}
          {summary && <p>{summary}</p>}
        </article>
      </Link>
    </div>
  );
}
