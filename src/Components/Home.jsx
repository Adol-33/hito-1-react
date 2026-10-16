import { useEffect, useState } from "react";

import "./../assets/css/Home.css";

import Header from "./Header";
import CardPizza from "./CardPizza";
// import { pizzas } from "./../../public/material_de_apoyo/pizzas";

// Componente
function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [apiOff, setApiOff] = useState(false);
  //
  useEffect(() => {
    const ObtenerPizzas = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/api/pizzas");

        if (!respuesta.ok)
          throw new Error(`Error en el fetch ${respuesta.message}`);

        const data = await respuesta.json();
        setPizzas(data);
        console.log(data);

        // Retorno
        return data;
      } catch (error) {
        console.log(`Error en Catch = ${error.message}`);
        setApiOff(true);
      }
    };

    ObtenerPizzas();
  }, []);

  if (apiOff) {
    return <h1>Servidor apagado</h1>;
  }

  // Renderizado
  return (
    <>
      <Header></Header>
      <div className="main">
        <ul className="ul-main">
          {pizzas.map((p) => {
            return (
              <CardPizza
                key={p.id}
                id={p.id}
                img={p.img}
                name={p.name}
                price={p.price}
                ingredients={p.ingredients}
                desc={p.desc}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
