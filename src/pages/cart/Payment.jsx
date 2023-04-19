import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../api/ShopCartContext";

export default function Payment() {
  const [, setShopCart] = useContext(ShoppingContext);
  const navigate = useNavigate();
  useEffect(() => {
    setShopCart([]);
    setTimeout(() => {
      navigate("/sobre");
    }, 10000);
  }, []);

  return (
    <div className="cart-container box-shadow-blue flow">
      <h2 className="ff-title fs-700 color-black">Hola...</h2>
      <p>
        Como es una página ficticia para simular un pago no se pedirá pasarela
        de pago ni datos personales, lo redireccionamos a la página de proyecto
        por si está interesado en saber cómo hemos hecho este proyecto. Muchas
        gracias por llegar hasta aqui
      </p>
    </div>
  );
}
