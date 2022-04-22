import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Creator from "./pages/Creator.jsx";
import Admin from "./pages/Admin.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<Creator />} />
          <Route path="/Edit/:id" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
