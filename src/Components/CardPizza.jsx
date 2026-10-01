//
import Boton from "./Boton";
import { useTotalContext } from "../context/Total.Context";
import "./../assets/css/CardPizza.css";

function CardPizza(props) {
  // Contexto total
  const { totalReal, setTotal } = useTotalContext();
  // Lista de ingredientes
  const ingredientes = "";

  // Agregar el valor al carrito
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
            <Boton>Ver Más</Boton>
            <Boton clase="negro" onClick={handlerAgregarPizza}>
              Añadir <i className="fa-solid fa-cart-arrow-down"></i>
            </Boton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
