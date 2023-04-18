/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { ShoppingContext } from "../api/ShopCartContext";

export default function Button({ color, title, id }) {
  const [shopCart, setShopCart] = useContext(ShoppingContext);
  const [isDisabled, setIsDisabled] = useState(
    shopCart.some((code) => code === id)
  );

  function handleShopCart(prodId) {
    setShopCart((oldCart) => [...oldCart, prodId]);
    setIsDisabled(true);
  }

  return (
    <button
      disabled={isDisabled}
      onClick={() => handleShopCart(id)}
      className={`btn btn-${color}`}
    >
      {isDisabled ? "Comprado" : title}
    </button>
  );
}
