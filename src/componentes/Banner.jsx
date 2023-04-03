/* eslint-disable react/prop-types */
import React from "react";

export default function Banner({ bannerType }) {
  const { color, title, description, imgUrl, productoId } = bannerType;

  return (
    <div className="banner-container">
      <aside
        className="banner-aside"
        style={{ backgroundColor: `hsl(var(--color-${color}))` }}
      >
        <div className="color-white">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div
          className="btn-img-container"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <button className="btn btn-green">Comprar</button>
        </div>
      </aside>
    </div>
  );
}
