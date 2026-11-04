//
export async function Registrar(email, password) {
  localStorage.clear();
  //
  try {
    const respuesta = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (respuesta.status == 400) {
      throw new Error("Error", respuesta.error);
    }

    const data = await respuesta.json();
    console.table(data);
    // Set el token
    localStorage.setItem("token", data.token);
    // return
    return data;
    // Catch
  } catch (error) {
    console.log(error);
  }
}
