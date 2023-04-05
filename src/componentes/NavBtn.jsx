/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBtn({ color, title, pathTo }) {
  return (
    <>
      <NavLink
        to={pathTo}
        className={({ isActive }) =>
          isActive ? "btn-active btn" : `btn btn-${color}`
        }
      >
        {title}
      </NavLink>
    </>
  );
}
