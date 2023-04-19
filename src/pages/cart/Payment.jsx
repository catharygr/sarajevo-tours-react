import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/sobre");
    }, 10000);
  }, []);

  return (
    <div className="cart-container box-shadow-blue flow">
      <h2 className="ff-title fs-700 color-black">Hola...</h2>
      <p>
        Como es una página fisticia para simular un pago no se pedirá pasarela
        de pago ni datos personales, lo enviaremos a la página de proyecto por
        si está interesado en saber cómo hemos hecho este proyecto. Muchas
        gracias por llegar hasta aqui
      </p>
    </div>
  );
}
