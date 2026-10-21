import React, { useContext, useEffect, useState } from "react";

import "./../assets/css/Navbar.css";

import { useTotalContext } from "../context/Total.Context";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar(props) {
  let navegar = useNavigate();
  // contexto
  const { total } = useContext(CartContext);

  // Variable reactiva
  const [token, setToken] = useState(false);

  // Handlers
  const handleLogin = () => {
    navegar("/hito-1-react/login");
  };
  const handleLogout = () => {
    setToken(false);
  };
  const handleRegister = () => {
    console.log(`Btn Register`);
    navegar("/hito-1-react/register");
  };
  const handleHome = () => {
    navegar("/hito-1-react/");
  };

  return (
    <div className="navbar">
      <menu className="menu-nav">
        <div className="div-p1">
          <p className="p-1">Pizzeria Mamma Mia</p>
          {token == true ? (
            <>
              <Link to="/hito-1-react/" clase="nav">
                Home <i className="fa-solid fa-house"></i>
              </Link>
              <Link to="/hito-1-react/profile" clase="nav">
                Profile <i className="fa-solid fa-user-gear"></i>
              </Link>
              <Link to="/hito-1-react/logout" clase="nav">
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </>
          ) : (
            <>
              <Link to="/hito-1-react" clase="nav">
                Home <i className="fa-solid fa-house"></i>
              </Link>
              <Link to="/hito-1-react/login" clase="nav">
                Login <i className="fa-regular fa-user"></i>
              </Link>
              <Link to="/hito-1-react/register" clase="nav">
                Register <i className="fa-solid fa-check-double"></i>
              </Link>
            </>
          )}
        </div>

        <div className="div-total">
          <Link to="/hito-1-react/cart" className="p-2">
            Total: <span>${total.toLocaleString()} </span>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </menu>
    </div>
  );
}

export default Navbar;
