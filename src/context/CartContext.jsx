import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

//
export function CartContextProvider({ children }) {
  //
  const [listaPizza, setListaPizza] = useState([]);
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState({ pizzas: listaPizza, total: 0 });

  useEffect(() => {
    setCarrito({ ...carrito, pizzas: listaPizza, total: total });
  }, [listaPizza, total]);

  const AgregarPizza = (item) => {
    // true o false
    const itemExiste = listaPizza.findIndex((i) => {
      if (i?.id == item.id) {
        i.cantidad++;
        return 1;
      }
    });
    if (itemExiste >= 0) {
      setTotal(total + item.price);
    } else {
      const nuevoItem = { ...item, cantidad: 1 };
      setListaPizza((prevLista) => [...prevLista, nuevoItem]);
      setTotal(total + item.price);
    }
  };

  const RestarPizza = (item) => {
    listaPizza.filter((i) => {
      if (i.id == item.id) {
        i.cantidad--;
        setTotal(total - i.price);
      }
    });
    if (item.cantidad == 0) {
      setListaPizza(listaPizza.filter((i) => i.id !== item.id));
    }
  };

  //
  return (
    <CartContext.Provider
      value={{ listaPizza, total, carrito, AgregarPizza, RestarPizza }}
    >
      {children}
    </CartContext.Provider>
  );
}
