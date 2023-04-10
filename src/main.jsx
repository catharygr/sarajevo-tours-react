import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataContext } from "./api/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>
);
