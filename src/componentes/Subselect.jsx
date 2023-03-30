/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

export default function Subselect({ dataProps }) {
  const { to1, to2, btn1, btn2, title } = dataProps;
  return (
    <div>
      <div className="sub-select">
        <h3 className="color-white">{title}</h3>
        <div className="subselect-btn-container">
          <NavLink
            to={to1}
            className={({ isActive }) =>
              isActive ? "btn-active btn" : "btn btn-green"
            }
          >
            {btn1}
          </NavLink>
          <NavLink
            to={to2}
            className={({ isActive }) =>
              isActive ? "btn-active btn" : "btn btn-green"
            }
          >
            {btn2}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
