import React from "react";

import { useContext, createContext, useState } from "react";

// Crear el contecto
const TotalContextPizzas = createContext();

// Provider: Aqui viv el estado global
export function TotalContextProvider({ children }) {
  // Variable
  const [totalReal, setTotal] = useState(0);

  // Retorna la variable dentro del provider
  return (
    <TotalContextPizzas.Provider value={{ totalReal, setTotal }}>
      {children}
    </TotalContextPizzas.Provider>
  );
}

// Custom hook para consumir el contexto
export function useTotalContext() {
  return useContext(TotalContextPizzas);
}
