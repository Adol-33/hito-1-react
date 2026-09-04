import React from "react";

import "./../assets/css/Boton.css";

function Boton({
  texto = "boton",
  onClick,
  tipo = "button",
  clase = "btn",
  children,
}) {
  return (
    <button type={tipo} onClick={onClick} className={`btn ${clase}`}>
      {children ? children : texto}
    </button>
  );
}

export default Boton;
