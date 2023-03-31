import React from "react";
import Subselect from "../componentes/Subselect";

export default function WalkLayout() {
  const props = {
    to1: "camitas de comida",
    to2: "camitas de historia",
    btn1: "Caminatas de comida",
    btn2: "Caminatas de historia",
    title: "Elige tu curiosidad",
  };
  return (
    <>
      <Subselect dataProps={{ ...props }} />
    </>
  );
}
