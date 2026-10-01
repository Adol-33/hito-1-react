import { useState } from "react";

import "./../assets/css/Home.css";

import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./../../public/material_de_apoyo/pizzas";
import { Link } from "react-router-dom";

// Componente
function Home() {
  console.log(pizzas);

  // Renderizado
  return (
    <>
      <Header></Header>
      <div className="main">
        <ul>
          {pizzas.map((p) => {
            return (
              <CardPizza
                key={p.id}
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
