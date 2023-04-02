import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function ProductLayout() {
  return (
    <div className="background-color-products">
      <div className="home-layout home-layout-pink">
        <Header color="color-white" />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
