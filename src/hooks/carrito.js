// Se usa en Cart.jsx
export async function EnviarCarrito(carrito) {
  const token = localStorage.getItem("token");
  try {
    const respuesta = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart: carrito }),
    });

    if (respuesta.status == 500) {
      throw new Error("Error", respuesta.error);
    }

    const data = await respuesta.json();
    alert("🍕¡Gracias por tu compra!🍕");
    return data;
  } catch (error) {
    console.log(error);
  }
}
