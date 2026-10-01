import { useState } from "react";
import "./App.css";

import { TotalContextProvider } from "./context/Total.Context";

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="Contenedor">
      <TotalContextProvider>
        <Cart />
        <Navbar />
        {/* <Home /> */}
        {/* <RegisterPage />
        <LoginPage /> */}
        <Footer />
      </TotalContextProvider>
    </div>
  );
}

export default App;
