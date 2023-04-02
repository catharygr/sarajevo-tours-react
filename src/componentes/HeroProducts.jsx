import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroProducts({ title, text, price }) {
  console.log(text);
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
          <h3 className="color-white">
            Las mejores guías dígital con GPS.Todos los detalles y más.
          </h3>
          <p className="fs-700 text-shadow-white ">{price}€</p>
          <div className="hero-btn-container">
            <NavLink
              to="caminar"
              className={({ isActive }) =>
                isActive ? "btn-active btn" : "btn btn-green"
              }
            >
              Comprar{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
