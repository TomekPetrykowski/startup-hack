"use client";
import React, { createContext, useContext, useState } from "react";

const HeaderSlotContext = createContext();

export function HeaderSlotProvider({ children }) {
  const [headerSlot, setHeaderSlot] = useState(null);

  return (
    <HeaderSlotContext.Provider value={{ headerSlot, setHeaderSlot }}>
      {children}
    </HeaderSlotContext.Provider>
  );
}

export function useHeaderSlot() {
  return useContext(HeaderSlotContext);
}
