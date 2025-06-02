/** @format */

import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import Downloads from "./pages/Downloads.jsx";
import { Sobre } from "./pages/Sobre.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename='Sonic-Braleashed-Site'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Downloads' element={<Downloads />} />
        <Route path='/Sobre' element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
