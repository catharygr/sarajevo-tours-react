/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ShoppingContext = createContext();

export function ShopCartContext({ children }) {
  const [shopCart, setShopCart] = useState([
    "4aCWgwiR49ElOxKcplki",
    "ONTBuOSEv3o8bEcaLTPM",
    "h3BFqDpcgE4mNOmxFQPQ",
  ]);
  return (
    <ShoppingContext.Provider value={[shopCart, setShopCart]}>
      {children}
    </ShoppingContext.Provider>
  );
}
