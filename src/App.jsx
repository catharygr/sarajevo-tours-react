import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/style.css";
import HomeLayout from "./pages/HomeLayout";
import HomeCards from "./pages/HomeCards";
import Ski from "./pages/Ski";
import Mtb from "./pages/Mtb";
import Walk from "./pages/Walk";
import ProductLayout from "./pages/ProductLayout";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomeCards />} />
          <Route path="esquiar" element={<Ski />} />
          <Route path="mtb" element={<Mtb />} />
          <Route path="caminar" element={<Walk />} />
        </Route>

        <Route path="products" element={<ProductLayout />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>

        <Route path="contacto" element={<Contact />} />
        <Route path="admin" element={<Login />} />
        <Route path="sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
