import React, { createContext, useState, useEffect } from 'react';

export const CurrencyContext = createContext();

// Provider

export const CurrencyContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [apiData, setApiData] = useState([]);
  const [dateData, setDateData] = useState('');
  const [currencyRate, setCurrencyRate] = useState({});

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then((res) => res.json())
      .then((data) => {
        setDateData(data.date);
        setCurrencyRate(data.rates);
        setApiData([data.base, ...Object.keys(data.rates)]);
      })
      .catch((err) => console.log(err, 'error'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValues = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
    apiData,
    dateData,
    currencyRate,
  };

  return (
    <CurrencyContext.Provider value={contextValues}>
      {children}
    </CurrencyContext.Provider>
  );
};
