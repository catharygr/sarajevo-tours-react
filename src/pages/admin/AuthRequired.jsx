/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../api/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthRequired() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
        navigate("/login");
      }
    });
  }, []);

  if (!isLogged) {
    return <h1>Login...</h1>;
  }
  return <Outlet />;
}
