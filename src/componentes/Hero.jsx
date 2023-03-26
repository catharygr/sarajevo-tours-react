import React from "react";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-fondo"></div>
        <div className="hero-text">
          <h2>Las mejores guías gps de aventura alrededor de la ciudad de:</h2>
          <h2>Sarajevo</h2>
        </div>
        <div className="hero-select">
          <h3 className="color-white">Elige tu pasión</h3>
          <div className="hero-btn-container">
            <button className="btn">Esquiar</button>
            <button className="btn">MTB</button>
            <button className="btn">Caminar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
