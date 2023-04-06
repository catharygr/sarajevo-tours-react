import React from "react";
import NavBtn from "./NavBtn";

export default function Footer() {
  return (
    <div className="footer">
      <NavBtn pathTo="/admin" color="pink" title="Panel admin" />
      <div>
        <h3 className=" ff-title fs-700 color-white">
          Hecho en 2023 por Bony & Cubi.
        </h3>
        <p className="fs-300">
          Estamos buscando oportunidades de trabajo como desarrolladores junior.
        </p>
      </div>
    </div>
  );
}
