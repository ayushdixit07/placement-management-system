import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [role, setRole] = useState(
    localStorage.getItem("role")
  );

 const login = (userRole) => {
  const normalizedRole = userRole.toLowerCase();
  setRole(normalizedRole);
  localStorage.setItem("role", normalizedRole);
};


  const logout = () => {
    setRole(null);
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

