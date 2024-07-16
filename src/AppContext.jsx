// AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState({
    estimatedPrice: 0,
    deliveryLocation: "",
    deliveryService: "",
  });
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <AppContext.Provider
      value={{ orderDetails, setOrderDetails, totalAmount, setTotalAmount }}
    >
      {children}
    </AppContext.Provider>
  );
};
