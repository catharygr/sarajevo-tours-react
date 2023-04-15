import React from "react";

export default function Panel() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card flow color-black">
        <p>Número de visitante por mes</p>
        <p className="fs-700 color-white">14.258</p>
        <p>Número de ventas por mes</p>
        <p className="fs-700 color-white">427</p>
        <p>Porcentaje de ventas por visitantes</p>
        <p className="fs-700 color-white">3%</p>
      </div>
      <div className="dashboard-card flow color-black">
        <p>Ganacias mes actual</p>
        <p className="fs-700 color-white">10.675</p>
        <p>Año por año</p>
        <p className="fs-700 color-white">7%</p>
        <p>Números de ventas</p>
        <p className="fs-700 color-white">675</p>
      </div>
    </div>
  );
}
