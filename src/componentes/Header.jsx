import React from "react";

export default function Header({ color }) {
  return (
    <div className="header-container">
      <div className="nav-cart">
        <nav>
          <ul className="nav-list fs-500">
            <li>Sobre</li>
            <li>Admin</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <img
          className="cart-img"
          src="/assets/images/shopping-cart.svg"
          alt="Carrito de compra"
        />
      </div>
      <div>
        <h1 className={`fs-700 logo-text ${color} text-shadow-blue`}>
          Sarajevo Tours
        </h1>
      </div>
    </div>
  );
}
