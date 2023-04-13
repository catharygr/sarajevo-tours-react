import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();
  function handleLogOut() {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth-Token");
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <h1>Ruta protegida!!</h1>
      <button className="btn btn-green" onClick={handleLogOut}>
        Acceder
      </button>
    </>
  );
}
