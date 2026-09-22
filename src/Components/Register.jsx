import { useState } from "react";
import "./../assets/css/Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  // Variable reactiva
  const [datos, setDatos] = useState({
    email: "",
    password: "",
    passwordDos: "",
  });

  // Email
  const handlerEmail = (e) => {
    e.preventDefault();
    const email = e.target.value;
    setDatos({ ...datos, email });
  };

  // Password
  const handlerPassword = (e) => {
    e.preventDefault();
    const password = Number(e.target.value);
    setDatos({ ...datos, password });
  };

  // Password 2
  const handlerPasswordConfirm = (e) => {
    e.preventDefault();
    const passConfirm = Number(e.target.value);
    setDatos({ ...datos, passwordDos: passConfirm });
  };

  // Navigate
  const navegar = useNavigate();

  // Submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (datos.password == datos.passwordDos) {
      alert("Registro correcto ✅");
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
          onChange={handlerEmail}
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
          onChange={handlerPassword}
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
          onChange={handlerPasswordConfirm}
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
