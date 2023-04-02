import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Hero from "../componentes/Hero";
import Footer from "../componentes/Footer";

export default function Home() {
  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-blue">
        <Header color="color-orange" />
        <Hero />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
