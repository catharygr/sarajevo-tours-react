import React from "react";
import NavBtn from "./NavBtn";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const adminLocation = location.pathname === "/login" ? false : true;

  return (
    <div className="footer">
      {adminLocation && (
        // eslint-disable-next-line prettier/prettier
        <NavBtn
          pathTo="/admin"
          color="pink"
          title="Panel admin"
        />
      )}
      <div>
        <h3 className=" ff-title fs-700 color-white">
          Hecho en 2023 con mucho amor.
        </h3>
        <p className="fs-300">
          Estoy buscando oportunidad de trabajo como desarrolladora junior.
        </p>
      </div>
    </div>
  );
}
