import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <h1>Hola</h1>
      <Outlet />
    </div>
  );
}
