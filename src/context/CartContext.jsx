import { createContext, useState } from "react";

const pizza = { nombre: "pizza 1" };

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  //
  const [listaPizza, setListaPizza] = useState([]);
  const [total, setTotal] = useState(0);

  const AgregarPizza = (item) => {
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
      value={{ listaPizza, total, AgregarPizza, RestarPizza }}
    >
      {children}
    </CartContext.Provider>
  );
}
