import React from "react";
import "./App.css";
import Header from "./Screen/Header";
import Home from "./Screen/Home";
import Details from "./Screen/details";
import Category from "./Screen/Category";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:id" element={<Category />} />
      <Route path="/detail" element={<Details />} />
    </Routes>
    // <Header />
    // <Home />
    // <Category />
    // <Details />
  );
}

export default App;
