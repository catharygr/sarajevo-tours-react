/* eslint-disable react/prop-types */
import React from "react";

export default function HeroProducts({ title, text, price }) {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-fondo"></div>
        <div className="hero-text">
          <h2 className="ff-title linea-text color-white">{text}</h2>
          <h2 className="ff-title color-blue linea-text hero-text-title rotate-sarajevo">
            {title}
          </h2>
        </div>
        <div className="hero-select hero-select-product">
          <h3 className="color-white fs-500">
            Las mejores guías dígital con GPS.Todos los detalles y más.
          </h3>
          <p className="fs-700 price">{price}€</p>
          <div className="hero-btn-container">
            <button className="btn btn-green">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
