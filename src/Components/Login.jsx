import { useContext, useState } from "react";
import "./../assets/css/login.css";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  // Navegar
  const navegar = useNavigate();
  // Variable reactiva
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Context
  const { token, setEmail, setToken } = useContext(UserContext);

  // Email
  const handlerEmail = (e) => {
    e.preventDefault();
    const email = e.target.value;
    setUser({ ...user, email });
  };

  // Password
  const handlerPassword = (e) => {
    e.preventDefault();
    const password = e.target.value;
    setUser({ ...user, password });
  };

  // Submit
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // si error
      if (!respuesta.ok) throw new Error("Error", respuesta.error);
      // recibo
      const data = await respuesta.json();
      // localstorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      // Seteo token
      setToken(data.token);
      setEmail(data.email);
      // Navego al Home
      navegar("/hito-1-react/");
      // Catch
    } catch (error) {
      console.log("error", error);
    }
  };

  if (token) {
    return (
      <div>
        <h1>Ya iniciaste sesion</h1>
        <Link to="/hito-1-react/">Home</Link>
        <br />
        <Link to="/hito-1-react/profile">Perfil</Link>
      </div>
    );
  }
  // Renderizado
  return (
    // Variable reactiva

    <div className="login">
      {/* <h1>Login</h1> */}

      <div className="div-img">
        <i className="fa-regular fa-user"></i>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={user.email}
          onChange={handlerEmail}
          type="email"
          autoFocus
          placeholder="Email"
          required
        />
        <input
          value={user.password}
          onChange={handlerPassword}
          type="password"
          placeholder="Password"
          required
          minLength={6}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
