import { useContext } from "react";

import "./../assets/css/Navbar.css";

import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Navbar(props) {
  // contexto
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <div className="navbar">
      <menu className="menu-nav">
        <div className="div-p1">
          <p className="p-1">Pizzeria Mamma Mia</p>
          {token ? (
            <>
              <Link to="/hito-1-react/" clase="nav">
                Home <i className="fa-solid fa-house"></i>
              </Link>
              <Link to="/hito-1-react/profile" clase="nav">
                Profile <i className="fa-solid fa-user-gear"></i>
              </Link>
              <Link to="/hito-1-react/" clase="nav" onClick={logout}>
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
