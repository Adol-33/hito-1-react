import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // navegar
  const navegar = useNavigate();
  //
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  function logout() {
    localStorage.clear();
    setToken(false);
    navegar("/hito-1-react/");
  }

  return (
    <UserContext.Provider value={{ token, email, setEmail, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
}
