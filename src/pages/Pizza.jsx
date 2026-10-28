import React, { useEffect, useState } from "react";
import CardPizza from "../Components/CardPizza";
import PizzaComponent from "../Components/PizzaComponent";
import { useParams } from "react-router-dom";

function Pizza() {
  const [pizza, setPizza] = useState({});
  const [cargando, setCargando] = useState(true);
  const [apiOff, setApiOff] = useState(false);

  const pizzaID = useParams();

  useEffect(() => {
    const ObtenerPizza = async () => {
      try {
        const respuesta = await fetch(
          `http://localhost:5000/api/pizzas/${pizzaID.id}`,
        );

        if (!respuesta.ok) {
          throw new Error(
            `Error en el fetch = ${respuesta.message} ${respuesta.status}`,
          );
        }

        //
        const data = await respuesta.json();

        if (data) {
          setPizza(data);
        }

        return data;
      } catch (error) {
        console.log(`Error en el catch = ${error.message}`);
        if (error.message.include("Failed to fetch")) {
          setApiOff(true);
          return <h1>Servidor apagado</h1>;
        }
      } finally {
        setCargando(false);
      }
    };

    ObtenerPizza();
  }, []);

  if (apiOff) {
    retrun(<h1>Servidor apagado</h1>);
  }

  if (cargando) {
    return <p>Cargando...</p>;
  }

  //
  return (
    <div>
      <PizzaComponent
        name={pizza.name}
        img={pizza.img}
        ingredients={pizza.ingredients}
        desc={pizza.desc}
        price={pizza.price}
      />
    </div>
  );
}

export default Pizza;
