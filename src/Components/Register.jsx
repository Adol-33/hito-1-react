import { useContext, useEffect, useState } from "react";
import "./../assets/css/Register.css";
import { useNavigate } from "react-router-dom";
// context
import { UserContext } from "../context/UserContext";
// registro
import { Registrar } from "./../hooks/Registro";

function Register() {
  // Navigate
  const navegar = useNavigate();
  // Variable reactiva
  const [datos, setDatos] = useState({
    email: "",
    password: "",
    passwordDos: "",
  });
  // registro
  const [isRegistrado, setIsRegistrado] = useState(
    localStorage.getItem("registrado"),
  );

  useEffect(() => {
    if (isRegistrado) navegar("/hito-1-react/profile");
  }, []);

  // context
  const { setEmail, setToken, setYaRegistrado } = useContext(UserContext);

  // Email
  const handleEmail = (e) => {
    const email = e.target.value;
    setDatos({ ...datos, email });
  };

  // Password
  const handlePassword = (e) => {
    const password = e.target.value;
    setDatos({ ...datos, password });
  };

  // Password 2
  const handlePasswordConfirm = (e) => {
    const passConfirm = e.target.value;
    setDatos({ ...datos, passwordDos: passConfirm });
  };

  // Submit
  const onSubmit = async (e) => {
    e.preventDefault();

    if (datos.password == datos.passwordDos) {
      const res = await Registrar(datos.email, datos.password);
      if (res.email) {
        setEmail(datos.email);
        setToken(res.token);
        setIsRegistrado(true);
        navegar("/hito-1-react/");
      }
      setDatos({ email: "", password: "", passwordDos: "" });
    } else {
      alert("Error al registrarte ❌");
    }
  };

  // Render
  return (
    <div className="register">
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
          value={datos.email}
          onChange={handleEmail}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          autoFocus
        />
        <label htmlFor="password">
          Contraseña
          <span style={{ color: "red" }}>*</span>
        </label>
        <input
          value={datos.password}
          onChange={handlePassword}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          minLength={6}
        />
        <label htmlFor="password2">
          Confiormar contraseña
          <span style={{ color: "red" }}>*</span>
        </label>
        <input
          value={datos.passwordDos}
          onChange={handlePasswordConfirm}
          type="password"
          name="password2"
          id="password2"
          placeholder="Confirmar password"
          required
          minLength={6}
        />
        <button type="submit">Enviar</button>
      </form>

      <div>
        <p>Mensaje de respuesta...</p>
      </div>
    </div>
  );
}

export default Register;
