import React from "react";
import Footer from "./Componets/Footer/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headphones from "./Pages/Headphones";
import Speaker from "./Pages/Speaker";
import Earphones from "./Pages/Earphones";
import ProductDetails from "./Pages/ProductDetails";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speaker />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/:name" element={<ProductDetails />} />
            <Route path="/*" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
