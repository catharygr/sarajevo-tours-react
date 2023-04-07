/* eslint-disable react/prop-types */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import hamburIcom from ".../assets/images/hamburguer.svg/";

export default function Header({ color }) {
  return (
    <div className="header-container">
      <div className="nav-cart">
        <nav>
          <button className="hamburguer">hola</button>
          <ul className="nav-list fs-500">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/sobre"
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/contacto"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <img
          className="cart-img"
          src="/assets/images/shopping-cart.svg"
          alt="Carrito de compra"
        />
      </div>
      <div>
        <Link to="/">
          <p className={`fs-700 logo-text ${color} text-shadow-blue`}>
            Sarajevo Tours
          </p>
        </Link>
      </div>
    </div>
  );
}
