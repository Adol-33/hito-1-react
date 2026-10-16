import React, { useEffect, useState } from "react";
import "./../assets/css/Profile.css";
import Boton from "../Components/Boton";

function Profile() {
  const [usuario, setUsuario] = useState({
    email: "email@prueba.com",
    password: "",
  });

  const handleEmail = (e) => {
    setUsuario(e.target.value);
  };
  return (
    <div className="div-profile">
      <form>
        <input
          type="email"
          placeholder="test@test.com"
          value={usuario.email}
          onChange={handleEmail}
        />
        <Boton texto="logout" />
      </form>
    </div>
  );
}

export default Profile;
