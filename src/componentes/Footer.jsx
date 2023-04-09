import React from "react";
import NavBtn from "./NavBtn";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const adminLocation = location.pathname === "/admin" ? false : true;
  console.log(adminLocation);

  console.log(location.pathname);
  return (
    <div className="footer">
      {adminLocation && (
        <NavBtn pathTo="/admin" color="pink" title="Panel admin" />
      )}
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
