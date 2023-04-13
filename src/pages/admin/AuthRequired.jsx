/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const isToken = sessionStorage.getItem("Auth-Token");
  const [isLoggedIn, setIsLoggedIn] = React.useState(isToken);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
