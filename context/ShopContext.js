"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getUserFromCookies } from "@/utils/auth";

const ShopContext = createContext();

const loadJSON = (key) => {
  try {
    return key && JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};

const saveJSON = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const ShopProvider = ({ children }) => {
  const [shops, setShops] = useState(() => loadJSON("shops") || []);
  const [currentShop, setCurrentShop] = useState(
    () => loadJSON("currentShop") || shops[0]
  );

  useEffect(() => {
    const fetchShops = async () => {
      if (shops?.length) return;

      const token = getUserFromCookies()?.token;

      if (!token) return;

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shops`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      setShops(data.data);
      saveJSON("shops", data.data);
    };

    if (!shops?.length) fetchShops();
  }, [shops]);

  useEffect(() => {
    if (currentShop) {
      saveJSON("currentShop", currentShop);
    }
  }, [currentShop]);

  return (
    <ShopContext.Provider value={{ shops, currentShop, setCurrentShop }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
