import React, { createContext, useState, useContext, useEffect } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    // console.log("user", storedUser);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse user data:", err);
      }
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return <userContext.Provider value={{ user, setUser, logout }}>{children}</userContext.Provider>;
};

export const useUser = () => useContext(userContext);
