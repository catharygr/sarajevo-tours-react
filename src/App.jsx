import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import HomeCards from "./pages/HomeCards";
import SkiLayout from "./pages/SkiLayout";
import MtbLayout from "./pages/MtbLayout";
import WalkLayout from "./pages/WalkLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeCards />} />
            <Route path="esquiar" element={<SkiLayout />} />
            <Route path="mtb" element={<MtbLayout />} />
            <Route path="caminar" element={<WalkLayout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
