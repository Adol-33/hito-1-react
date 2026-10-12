import React from "react";
//
import "./../assets/css/PizzaComponent.css";
import Boton from "./Boton";

function PizzaComponent(props) {
  return (
    <div className="div-pizza-component">
      <h2>{props.name}</h2>
      <div className="div-img-pizza-component">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="div-ingredientes">
        <h3>Ingredientes: </h3>
        <ul>
          {props.ingredients.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </div>
      <div className="div-descripcion">
        <h3>Descripcion:</h3>
        <p>{props.desc}</p>
      </div>
      <div className="div-precio">
        <h3>Precio:</h3>
        <p>${props.price.toLocaleString()}</p>
      </div>

      <Boton texto="Añadis al carrito" />
    </div>
  );
}

export default PizzaComponent;
