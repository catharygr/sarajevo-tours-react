/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function CardHome({ card }) {
  const { title, summary, description, imgUrl } = card;
  const randomDeg = Math.random() * 10 - 5;
  return (
    <div
      style={{ transform: `rotate(${randomDeg}deg)` }}
      className="home-card-container"
    >
      <article className="home-card-article">
        <h3 className="ff-title color-white">{title}</h3>
        <img src={imgUrl} alt="imagen de una chica tumbada en la nieve" />
        {description && <p>{description}</p>}
        {summary && <p>{description}</p>}
      </article>
    </div>
  );
}
