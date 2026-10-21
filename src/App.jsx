import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { TotalContextProvider } from "./context/Total.Context";

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./Components/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="contenedor">
      <CartContextProvider>
        <TotalContextProvider>
          <Navbar />
          <Routes>
            <Route path="/hito-1-react/" element={<Home />} />
            <Route path="/hito-1-react/login" element={<LoginPage />} />
            <Route path="/hito-1-react/register" element={<RegisterPage />} />
            <Route path="/hito-1-react/Cart" element={<Cart />} />
            <Route path="/hito-1-react/pizza/:id" element={<Pizza />} />
            <Route path="/hito-1-react/profile" element={<Profile />} />
            <Route path="/hito-1-react/404" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </TotalContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
