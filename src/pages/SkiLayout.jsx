import React from "react";
import { Outlet } from "react-router-dom";
import Subselect from "../componentes/Subselect";

export default function SkiLayout() {
  const props = {
    to1: "jahorina",
    to2: "bjelasnica",
    btn1: "Jahorina",
    btn2: "Bjelasnica",
    title: "Eligetu montaña",
  };
  return (
    <>
      <Subselect dataProps={{ ...props }} />
      <Outlet />
    </>
  );
}
