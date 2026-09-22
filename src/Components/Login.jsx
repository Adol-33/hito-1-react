import { useState } from "react";
import "./../assets/css/login.css";

function Login() {
  // Variable reactiva
  const [user, setUser] = useState({ email: "", password: "" });

  // Handler
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
  const onSubmit = (e) => {
    e.preventDefault();
    if (user.email == "prueba@prueba.com" && user.password == "123456") {
      alert("Authentication successfull ✅");
      setUser({ email: "", password: "" });
    } else {
      alert("Error Authentication ❌");
    }
  };
  // Renderizado
  return (
    // Variable reactiva

    <div className="login">
      {/* <h1>Login</h1> */}

      <div className="div-img">
        <i className="fa-regular fa-user"></i>
      </div>

      <form onSubmit={onSubmit}>
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
