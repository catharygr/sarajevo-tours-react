import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-fondo"></div>
        <div className="hero-text">
          <h2 className="ff-title linea-text color-white">
            Las mejores guías gps de aventura alrededor de la ciudad de:
          </h2>
          <h2 className="ff-title color-blue linea-text hero-text-title rotate-sarajevo">
            Sarajevo
          </h2>
        </div>
        <div className="hero-select">
          <h3 className="color-white">Elige tu pasión</h3>
          <div className="hero-btn-container">
            <NavLink
              to="esquiar"
              className={({ isActive }) =>
                isActive ? "btn-active btn" : "btn btn-green"
              }
            >
              Esquiar
            </NavLink>
            <NavLink
              to="mtb"
              className={({ isActive }) =>
                isActive ? "btn-active btn" : "btn btn-green"
              }
            >
              MTB
            </NavLink>
            <NavLink
              to="caminar"
              className={({ isActive }) =>
                isActive ? "btn-active btn" : "btn btn-green"
              }
            >
              Caminar
            </NavLink>
          </div>
          <NavLink to="/" className="underline">
            Limpiar filtro
          </NavLink>
        </div>
      </div>
    </div>
  );
}
