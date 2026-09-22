import { useState } from "react";
import "./App.css";

import { TotalContextProvider } from "./context/Total.Context";

import Home from "./Components/Home";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="Contenedor">
      <TotalContextProvider>
        <Navbar />
        {/* <Home /> */}
        <RegisterPage />
        <LoginPage />
        <Footer />
      </TotalContextProvider>
    </div>
  );
}

export default App;
