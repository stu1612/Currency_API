import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

// Provider

export const CurrencyContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [quoteCurrency, setQuotecurrency] = useState('GBP');

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuotecurrency(baseCurrency);
  };

  const contextValues = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuotecurrency,
  };

  return (
    <CurrencyContext.Provider value={contextValues}>
      {children}
    </CurrencyContext.Provider>
  );
};
