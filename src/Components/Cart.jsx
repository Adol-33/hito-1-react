import { useReducer, useState } from "react";
//
import "./../assets/css/Cart.css";
//
import { pizzaCart } from "../../public/material_de_apoyo/pizzas";
import Boton from "./Boton";

const valorInicial = pizzaCart
  .map((p) => p.count * p.price)
  .reduce((acc, valor) => acc + valor, 0);
//
function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const [conteo, setConteo] = useState(valorInicial);

  // Sumar
  const handleIncrement = (id) => {
    pizzaCart.forEach((pizza) => {
      if (pizza.id === id) {
        pizza.count = pizza.count + 1;
        // Cada vez que halla un incrementos recorro el array
        setConteo(
          pizzaCart
            .map((p) => p.count * p.price)
            .reduce((acc, valor) => acc + valor, 0),
        );
      }
    });
  };

  // Restar
  const handleDecrement = (id) => {
    pizzaCart.forEach((pizza) => {
      if (pizza.id === id) {
        if (pizza.count >= 1) {
          pizza.count = pizza.count - 1;
          // Hacemos el que variable haga el calculo de nuevo recorriendo pizzaCart
          setConteo(
            pizzaCart
              .map((p) => p.count * p.price)
              .reduce((acc, valor) => acc + valor, 0),
          );
        }
      }
    });
  };

  return (
    <div className="div-contenedor-cart">
      <h1>Cart</h1>
      <div className="div-detalles-pedido">
        <h3>detalles del pedido</h3>
        {cart.map((pizza, index) => {
          if (pizza.count > 0) {
            return (
              <li key={pizza.id}>
                <div className="div-img">
                  <img src={pizza.img} alt="" />
                </div>
                <p>{pizza.name}</p>
                <span>{pizza.price.toLocaleString()}</span>
                <Boton
                  texto="-"
                  onClick={() => handleDecrement(pizza.id)}
                  clase="red"
                />
                {pizza.count}
                <Boton
                  texto="+"
                  onClick={() => handleIncrement(pizza.id)}
                  clase="blue"
                />
              </li>
            );
          }
        })}
      </div>
      <div className="div-total">
        <h2>total: ${conteo.toLocaleString()}</h2>
        <Boton texto="Pagar" clase="black" />
      </div>
    </div>
  );
}

export default Cart;
