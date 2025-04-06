import { createContext, useContext, useState, useEffect } from "react";

// Create a context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!sessionStorage.getItem("token") // Initializes based on token presence
  );

  // Login method
  const login = (token) => {
    sessionStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  // Logout method
  const logout = () => {
    sessionStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  // Optional: remove auto-login for better security in real apps
  useEffect(() => {
    // const token = sessionStorage.getItem("token");
    // if (token) {
    //   setIsAuthenticated(true);
    // }
    login("fghfsh")
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
