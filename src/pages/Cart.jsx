import React, { useContext } from "react";
import { ShoppingContext } from "../api/ShopCartContext";

export default function Cart() {
  const [shopCart, setShopCart] = useContext(ShoppingContext);
  console.log(shopCart);
  return <h1>Shop Cart</h1>;
}
