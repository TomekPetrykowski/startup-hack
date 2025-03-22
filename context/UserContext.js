"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getUserFromCookies, clearUserSession } from "@/utils/auth";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const userData = getUserFromCookies();
    setUser(userData || null);
  }, []);

  const logout = async () => {
    const response = await clearUserSession();

    if (response) {
      setUser(null);
      return {
        title: "Operacja zakończyła się sukcesem",
        description: response.message,
        error: false,
      };
    }

    return {
      title: "Błąd",
      description: "Nie udało się wylogować",
      error: true,
    };
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
