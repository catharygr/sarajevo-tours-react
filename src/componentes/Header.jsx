/* eslint-disable react/prop-types */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HamburgIcon } from "..//assets//hamburger.svg";

export default function Header({ color }) {
  const [isOpenMenu, setIsOpenMenu] = React.useState(true);
  function handleClick() {
    setIsOpenMenu((isOpenMenu) => !isOpenMenu);
  }
  return (
    <div className="header-container">
      <div className="nav-cart">
        <nav>
          <button className="hamburguer" onClick={handleClick}>
            <HamburgIcon className="hamburg-icon" />
          </button>
          <ul aria-hidden={isOpenMenu} className="nav-list fs-500">
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
