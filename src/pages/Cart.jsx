import React, { useContext } from "react";
import { ShoppingContext } from "../api/ShopCartContext";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function Cart() {
  const [shopCart, setShopCart] = useContext(ShoppingContext);
  console.log(shopCart);
  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-blue">
        <Header color="color-orange" />
        <div className="cart-container">
          <h1 className="ff-title fs-700 color-white">Carro de compra</h1>
          <p>Producto de compra</p>
          <ol className="cart-list">
            <li className="cart-list-item">
              <div className="title-summary">
                <h3 className="fs-500">Titulo</h3>
                <p>Sumario</p>
              </div>
              <p className="cart-price fs-600">$55</p>
            </li>
            <li className="cart-list-item">
              <div className="title-summary">
                <h3 className="fs-500">Titulo</h3>
                <p>Sumario</p>
              </div>
              <p className="cart-price fs-600">$55</p>
            </li>
            <li className="cart-list-item">
              <div className="title-summary">
                <h3 className="fs-500">Titulo</h3>
                <p>Sumario</p>
              </div>
              <p className="cart-price fs-600">$55</p>
            </li>
          </ol>
        </div>
        <Footer />
      </div>
    </div>
  );
}
