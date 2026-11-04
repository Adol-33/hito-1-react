import { useContext } from "react";
//
import "./../assets/css/Cart.css";
//
import Boton from "./Boton";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
//
import { EnviarCarrito } from "../hooks/carrito";

//
function Cart() {
  // Navegar
  const navegar = useNavigate();
  // Context
  const { listaPizza, AgregarPizza, RestarPizza, total, carrito } =
    useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="div-contenedor-cart">
      <h1>Cart</h1>
      <div className="div-detalles-pedido">
        <h3>detalles del pedido</h3>
        {listaPizza.map((e) => (
          <li key={e.id}>
            <div
              className="div-img"
              onClick={() => navegar(`/hito-1-react/pizza/${e.id}`)}
            >
              <img src={e.img} alt="" />
            </div>

            <p>{e.name}</p>
            <span> ${e.price}</span>
            <Boton texto="-" onClick={() => RestarPizza(e)} />
            <span>{e.cantidad}</span>
            <Boton
              texto="+"
              onClick={() => {
                AgregarPizza(e);
              }}
            />
          </li>
        ))}
      </div>
      <div className="div-total">
        <h2>total: ${total.toLocaleString()}</h2>
        {token && listaPizza.length > 0 ? (
          <Boton
            onClick={() => EnviarCarrito(carrito)}
            texto="Pagar"
            clase="black"
          />
        ) : (
          <Boton texto="Pagar" clase="black disable" />
        )}
      </div>
    </div>
  );
}

export default Cart;
