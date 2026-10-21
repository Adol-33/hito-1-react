//
import Boton from "./Boton";
import "./../assets/css/CardPizza.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CardPizza(props) {
  let navegar = useNavigate();

  const { AgregarPizza } = useContext(CartContext);

  return (
    <div className="card">
      <div className="div-1">
        <img src={props.img} alt="" />
      </div>
      <div className="div-2">
        <p>
          <b>pizza {props.name}</b>
        </p>
        <hr />
        <div className="ingrediente">
          <i className="fa-solid fa-pizza-slice"></i>
          <p>Ingredientes:</p>
          <ul>
            {props.ingredients.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="precio">
          <p>
            <b>Precio: </b>
          </p>
          <span>${props.price.toLocaleString()}</span>
          <div className="precio-btn">
            <Boton
              onClick={() => {
                navegar(`/hito-1-react/pizza/${props.id}`);
              }}
            >
              Ver Más
            </Boton>
            <Boton clase="negro" onClick={() => AgregarPizza(props)}>
              Añadir <i className="fa-solid fa-cart-arrow-down"></i>
            </Boton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
