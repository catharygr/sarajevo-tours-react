import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";

export default function ProductLayout() {
  return (
    <div className="background-color-products">
      <div className="home-layout home-layout-pink">
        <Header color="color-white" />
        <Outlet />
        <Banner
          bannerType={{
            color: "blue",
            title: "50% de descuento",
            description:
              "Guía de esquí habilitado para GPS. Todos los alojamientos, las pistas. DOS montañas COMBO, Jahorina y Bjelašnica...",
            imgUrl: "/assets/images/ski-card.jpg",
            productoId: "YSYMGTyJXxK3xKcqFsR2",
          }}
        />
        <Footer />
      </div>
    </div>
  );
}
