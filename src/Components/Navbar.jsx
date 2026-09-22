import React, { useEffect, useState } from "react";

import "./../assets/css/Navbar.css";

import { useTotalContext } from "../context/Total.Context";
import Boton from "./Boton";
import { Link } from "react-router-dom";
import Register from "../pages/RegisterPage";

function Navbar(props) {
  // contexto
  const { totalReal } = useTotalContext();

  // Variable reactiva
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState(false);

  // Handlers
  const handlerLogin = () => {
    setToken(true);
  };
  const handlerLogout = () => {
    setToken(false);
  };
  const handlerRegister = () => {
    console.log(`Btn Register`);
  };

  return (
    <div className="navbar">
      <menu className="menu-nav">
        <div className="div-p1">
          <p className="p-1">Pizzeria Mamma Mia</p>
          {token == true ? (
            <>
              <Boton texto="Home" clase="nav">
                Home <i className="fa-solid fa-house"></i>
              </Boton>
              <Boton texto="Profile" clase="nav">
                Profile <i className="fa-solid fa-user-gear"></i>
              </Boton>
              <Boton texto="Logout" clase="nav" onClick={handlerLogout}>
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </Boton>
            </>
          ) : (
            <>
              <Boton texto="Login" clase="nav" onClick={handlerLogin}>
                Login <i className="fa-regular fa-user"></i>
              </Boton>
              <Boton texto="Registrar" clase="nav" onClick={handlerRegister}>
                Register <i className="fa-solid fa-check-double"></i>
              </Boton>
            </>
          )}
        </div>

        <div className="div-total">
          <p className="p-2">
            Total: <span>${(total + totalReal).toLocaleString()} </span>
            <i className="fa-solid fa-cart-shopping"></i>
          </p>
        </div>
      </menu>
    </div>
  );
}

export default Navbar;
