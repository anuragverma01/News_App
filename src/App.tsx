import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/details";
import Category from "./pages/Category";
import { Route, Routes } from "react-router-dom";

function App () {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/categories/:id" element={ <Category /> } />
      <Route path="/detail/:detail-id" element={ <Details /> } />
    </Routes>
    // <Header />
    // <Home />
    // <Category />
    // <Details />
  );
}

export default App;