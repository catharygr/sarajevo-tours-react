/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ShoppingContext = createContext();

export function ShopCartContext({ children }) {
  const [shopCart, setShopCart] = useState(
    JSON.parse(localStorage.getItem("SarajevoShopCart")) || []
  );
  return (
    <ShoppingContext.Provider value={[shopCart, setShopCart]}>
      {children}
    </ShoppingContext.Provider>
  );
}
