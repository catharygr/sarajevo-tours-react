import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { Outlet, useNavigate, Link, NavLink } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();
  function handleLogOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="background-color-products">
      <div className="home-layout color-white">
        <header className="admin-header">
          <Link className="underline-admin fs-500" to="/">
            {"<< Inicio"}
          </Link>
          <button className="btn btn-green" onClick={handleLogOut}>
            Salir
          </button>
        </header>
        <nav>
          <ul className="admin-nav">
            <li>
              <NavLink
                to="."
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
              >
                Panel
              </NavLink>
            </li>
            <li>
              <NavLink
                to="productos"
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
              >
                Productos
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="ingresos"
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
              >
                Ingresos
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
