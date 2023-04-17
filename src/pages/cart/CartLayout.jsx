import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import { Outlet } from "react-router-dom";

export default function CartLayout() {
  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-blue">
        <Header color="color-orange" />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
