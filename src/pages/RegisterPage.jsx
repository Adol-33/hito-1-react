import "./../assets/css/Register.css";

function Register() {
  return (
    <div className="register">
      <form>
        <label htmlFor="email">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
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
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <label htmlFor="password2">
          Confiormar contraseña
          <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Confirmar password"
          required
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
