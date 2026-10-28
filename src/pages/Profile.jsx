import { useContext, useEffect, useState } from "react";
import "./../assets/css/Profile.css";
import Boton from "../Components/Boton";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  // navegar
  const navegar = useNavigate();
  // Contexto Usuario
  const { token, email, logout } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      navegar("/hito-1-react/login");
    }
  }, []);

  return (
    <div className="div-profile">
      {email ? (
        <div>
          <h2>
            <b>Email: </b>
          </h2>
          <h1>{email}</h1>
          <Boton onClick={logout} texto="logout" />
        </div>
      ) : (
        <p>No Email</p>
      )}
    </div>
  );
}

export default Profile;
