import React from "react";
import { Outlet } from "react-router-dom";
import Subselect from "../componentes/Subselect";

export default function MtbLayout() {
  const props = {
    to1: "un-dia",
    to2: "varios-dias",
    btn1: "Un dia",
    btn2: "Varios días",
    title: "Elige tus días",
  };
  return (
    <>
      <Subselect dataProps={{ ...props }} />
      <Outlet />
    </>
  );
}
