/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "./firebase";

export const ProductContext = createContext();

export function DataContext({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function getData() {
      const datos = await getProducts();
      setData(datos);
    })();
  }, []);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
}
