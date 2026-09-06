import React from "react";

import Boton from "./Boton";
import { useTotalContext } from "../context/TotalContext";
import "./../assets/css/CardPizza.css";

function CardPizza(props) {
  // Contexto total
  const { totalReal, setTotal } = useTotalContext();
  const ingredientes = props.ingredients.join(", ");

  const handlerAgregarPizza = () => {
    console.log(`Precio: ${props.price}`);
    setTotal(totalReal + props.price);
  };

  return (
    <div className="card">
      <div className="div-1">
        <img src={props.img} alt="" />
      </div>
      <div className="div-2">
        <p>
          <b>Pizza {props.name}</b>
        </p>
        <hr />
        <p className="ingrediente">
          <i className="fa-solid fa-pizza-slice"></i>
          Ingredientes:
          <br />
          <span>{ingredientes}</span>
        </p>
        <hr />
        <div className="precio">
          <p>
            <b>Precio: </b>
          </p>
          <span>${props.price.toLocaleString()}</span>
          <div className="precio-btn">
            <Boton texto="Ver Más"></Boton>
            <Boton texto="Añadir" clase="negro" onClick={handlerAgregarPizza}>
              Añadir <i className="fa-solid fa-cart-arrow-down"></i>
            </Boton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
