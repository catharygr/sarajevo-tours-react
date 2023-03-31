import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import HomeCards from "./pages/HomeCards";
import Ski from "./pages/Ski";
import Mtb from "./pages/Mtb";
import Walk from "./pages/Walk";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeCards />} />
            <Route path="esquiar" element={<Ski />} />
            <Route path="mtb" element={<Mtb />} />
            <Route path="caminar" element={<Walk />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
