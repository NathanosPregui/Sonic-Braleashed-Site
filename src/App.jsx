/** @format */

import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import Downloads from "./pages/Downloads.jsx";
import { Sobre } from "./pages/Sobre.jsx";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
