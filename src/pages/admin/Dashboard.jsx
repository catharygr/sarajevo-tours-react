import React from "react";

export default function Panel() {
  return (
    <div className="dashboard-container">
      <div>
        <p>Número de visitante por mes</p>
        <p>14.258</p>
        <p>Número de ventas por mes</p>
        <p>427</p>
        <p>Porcentaje de ventas por visitantes</p>
        <p>3%</p>
      </div>
      <div>
        <p>Ganacias mes actual</p>
        <p>10.675</p>
        <p>Año por año</p>
        <p>7%</p>
        <p>Números de ventas</p>
        <p>675</p>
      </div>
    </div>
  );
}
