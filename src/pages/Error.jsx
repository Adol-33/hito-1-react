import React from "react";
import "./../assets/css/ErrorPage.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="div-error">
      <h1>UPS!</h1>
      <h2>Pagina no encontrada...</h2>

      <Link className="volver-home" to="/hito-1-react">
        Volver al Home
      </Link>
    </div>
  );
}

export default Error;
