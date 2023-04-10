/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

export default function SubSelect({ dataProps, searchType }) {
  const { to1, to2, btn1, btn2, title } = dataProps;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sub-select">
      <h3 className="color-white">{title}</h3>
      <div className="subselect-btn-container">
        <NavLink
          to={`?type=${to1}`}
          className={searchType === to1 ? "btn btn-active" : "btn btn-green"}
        >
          {btn1}
        </NavLink>
        <NavLink
          to={`?type=${to2}`}
          className={searchType === to2 ? "btn btn-active" : "btn btn-green"}
        >
          {btn2}
        </NavLink>
      </div>
      {
        <NavLink to="." className="underline">
          Limpiar filtro
        </NavLink>
      }
    </div>
  );
}
