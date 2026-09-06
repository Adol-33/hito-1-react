import { useState } from "react";
import "./App.css";

import { TotalContextProvider } from "./context/TotalContext";

import Home from "./Components/Home";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Contenedor">
      <TotalContextProvider>
        <Navbar />
        <Home />
        {/* <RegisterPage /> */}
        <Footer />
      </TotalContextProvider>
    </div>
  );
}

export default App;
