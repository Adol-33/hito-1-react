import React, { useState } from "react";

import "./../assets/css/Home.css";

import Header from "./Header";
import CardPizza from "./CardPizza";

// Componente
function Home() {
  // Renderizado
  return (
    <>
      <Header></Header>
      <div className="main">
        <CardPizza
          img="https://www.hola.com/horizon/landscape/85bed2f17abc-adobestock444867086.jpg?im=Resize=(640),type=downsize"
          name="Napolitana"
          price={15000}
          ingredients={["Queso", "Jamon"]}
        />
        <CardPizza
          img="https://tse4.mm.bing.net/th/id/OIP.h-0eDHHVyQ7f5x1TIzNXJgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          name="Romana"
          price={25000}
          ingredients={["Chicharron", "Churrasco", "Cebolla", "Tomate"]}
        />
        <CardPizza
          img="https://www.hola.com/horizon/landscape/a17cd68660e0-pizza-hawaiana-t.jpg"
          name="Hawaiana"
          price={35000}
          ingredients={["Salsa", "Piña"]}
        />
      </div>
    </>
  );
}

export default Home;
