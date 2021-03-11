import React, { createContext, useState, useEffect } from 'react';

export const CurrencyContext = createContext();

// Provider

export const CurrencyContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [quoteCurrency, setQuotecurrency] = useState('GBP');
  const [apiData, setApiData] = useState([]);
  const [mainData, setMainData] = useState('');

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuotecurrency(baseCurrency);
  };

  useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then((res) => res.json())
      .then((data) => {
        setMainData(data.date);
        console.log(mainData);
        setApiData([data.base, ...Object.keys(data.rates)]);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValues = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuotecurrency,
    apiData,
    mainData,
  };

  return (
    <CurrencyContext.Provider value={contextValues}>
      {children}
    </CurrencyContext.Provider>
  );
};
