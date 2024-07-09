import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Layout from "./Layout";
import Contact from "../Contact";
import React from "react";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
