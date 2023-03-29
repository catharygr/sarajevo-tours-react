/* eslint-disable react/prop-types */
import React from "react";

export default function CardHome({ card }) {
  const randomDeg = Math.random() * 10 - 5;
  return (
    <div
      style={{ transform: `rotate(${randomDeg}deg)` }}
      className="home-card-container"
    >
      <article className="home-card-article">
        <h3 className="ff-title color-white">{card.title}</h3>
        <img src={card.imgUrl} alt="imagen de una chica tumbada en la nieve" />
        <p>{card.description}</p>
      </article>
    </div>
  );
}
