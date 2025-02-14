import React, { useState, useEffect } from 'react';
import './CurrencyConversion.css';

export default function CurrencyConversion() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://data.fixer.io/api/latest?access_key=b17dc2f57483aafe3fde877e60c3b6f6');
        const data = await response.json();
        if (data.success) {
          setExchangeRates(data.rates);
        } else {
          setError("We can not get currency exchange rate from API");
        }
      } catch (error) {
        setError("We can not get currency exchange rate from API");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

 
  const convertCurrency = (amount, from, to) => {
    if (!exchangeRates[from] || !exchangeRates[to]) return 0;
    const amountInUSD = amount / exchangeRates[from];
    const convertedAmount = amountInUSD * exchangeRates[to];
    return convertedAmount;
  };

 
  const formatAmount = (amount, currency) => {
    if (currency === 'IRR') {
      return ((amount / 1000)*2.1).toLocaleString(); 
    }
    return amount.toLocaleString(); 
  };

 
  const handleFromAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    setFromAmount(amount);
    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    setToAmount(convertedAmount);
  };

  const handleToAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    setToAmount(amount);
    const convertedAmount = convertCurrency(amount, toCurrency, fromCurrency);
    setFromAmount(convertedAmount);
  };

  const handleFromCurrencyChange = (e) => {
    const currency = e.target.value;
    setFromCurrency(currency);
    const convertedAmount = convertCurrency(fromAmount, currency, toCurrency);
    setToAmount(convertedAmount);
  };

  const handleToCurrencyChange = (e) => {
    const currency = e.target.value;
    setToCurrency(currency);
    const convertedAmount = convertCurrency(fromAmount, fromCurrency, currency);
    setToAmount(convertedAmount);
  };

  const handleSwapCurrencies = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    const convertedAmount = convertCurrency(fromAmount, toCurrency, fromCurrency);
    setToAmount(convertedAmount);
  };

  if (loading) {
    return <div className="apiLoad">Loading Curency Exchange Rate ...</div>;
  }

  if (error) {
    return <div className='apiError'>{error}</div>;
  }

  return (
    <form className='CurrencyConversion'>
      <div>
        <select 
          name="FromCurrency" 
          id="FromCurrency" 
          value={fromCurrency} 
          onChange={handleFromCurrencyChange}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>

        <input 
          type="number" 
          name="FromAmount" 
          id="FromAmount" 
          value={fromAmount} 
          onChange={handleFromAmountChange} 
          placeholder='0' 
        />
      </div>
      <div className='gap'>
        <button type="button" onClick={handleSwapCurrencies}>🔃</button>
      </div>
      <div>
        <select 
          name="ToCurrency" 
          id="ToCurrency" 
          value={toCurrency} 
          onChange={handleToCurrencyChange}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>

        <input 
          type="number" 
          name="ToAmount" 
          id="ToAmount" 
          value={formatAmount(toAmount, toCurrency)} // نمایش مقدار به‌صورت هزار تومان
          onChange={handleToAmountChange} 
          placeholder='0' 
          readOnly 
        />
      </div>
    </form>
  );
}