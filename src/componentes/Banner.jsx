/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ButtonCart from "./ButtonCart";

export default function Banner({ bannerType }) {
  const { color, title, description, imgUrl, productoId } = bannerType;

  return (
    <div className="banner-container">
      <aside className={`banner-aside banner-aside-${color}`}>
        <div className="banner-aside-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div
          className="btn-img-container"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <ButtonCart
            className="color-black"
            color="green"
            title="Comprar"
            id={productoId}
          />
        </div>
      </aside>
    </div>
  );
}
