import { useContext, useEffect, useState } from "react";
//
import "./../assets/css/Cart.css";
//
import Boton from "./Boton";
import { CartContext } from "../context/CartContext";

//
function Cart() {
  const { listaPizza, AgregarPizza, RestarPizza, total } =
    useContext(CartContext);

  return (
    <div className="div-contenedor-cart">
      <h1>Cart</h1>
      <div className="div-detalles-pedido">
        <h3>detalles del pedido</h3>
        {listaPizza.map((e) => (
          <li key={e.id}>
            <div className="div-img">
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
        <Boton texto="Pagar" clase="black" />
      </div>
    </div>
  );
}

export default Cart;
