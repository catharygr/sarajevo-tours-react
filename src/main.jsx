import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataContext } from "./api/DataContext";
import { ShopCartContext } from "./api/ShopCartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <ShopCartContext>
        <App />
      </ShopCartContext>
    </DataContext>
  </React.StrictMode>
);
