import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <div className="nav-cart">
        <nav>
          <ul>
            <li>Acerca</li>
            <li>Adm</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <img src="/assets/images/shopping-cart.svg" alt="Carrito de compra" />
      </div>
      <div>
        <h1 className="ff-text fs-700">Seher Tours</h1>
      </div>
    </div>
  );
}
