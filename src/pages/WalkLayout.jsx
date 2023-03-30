import React from "react";
import { Outlet } from "react-router-dom";
import Subselect from "../componentes/Subselect";

export default function WalkLayout() {
  const props = {
    to1: "camita de comida",
    to2: "camita de historia",
    btn1: "Caminata de comida",
    btn2: "Caminata de historia",
    title: "Elige tu caminata",
  };
  return (
    <>
      <Subselect dataProps={{ ...props }} />
      <Outlet />
    </>
  );
}
