import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState({
    estimatedPrice: 0,
    deliveryLocation: "",
    deliveryService: "",
  });

  return (
    <AppContext.Provider value={{ orderDetails, setOrderDetails }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
