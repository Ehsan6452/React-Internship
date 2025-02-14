import React, { useState } from 'react';
import './CurrencyConversion.css';

export default function CurrencyConversion() {

    const exchangeRates = {
        USD: 1,
        EUR: 1.18,
        GBP: 1.38,
        JPY: 0.0091,
        CNY: 0.15,
        AUD: 0.75,
        CAD: 0.8,
    };

    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR'); 


    const convertCurrency = (amount, from, to) => {

        const amountInUSD = amount / exchangeRates[from];

        const convertedAmount = amountInUSD * exchangeRates[to];
        return convertedAmount;
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

    return (
        <form className='CurrencyConversion'>
            <div>
                <select 
                    name="FromCurrency" 
                    id="FromCurrency" 
                    value={fromCurrency} 
                    onChange={handleFromCurrencyChange}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="CNY">CNY</option>
                    <option value="AUD">AUD</option>
                    <option value="CAD">CAD</option>
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
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="CNY">CNY</option>
                    <option value="AUD">AUD</option>
                    <option value="CAD">CAD</option>
                </select>

                <input 
                    type="number" 
                    name="ToAmount" 
                    id="ToAmount" 
                    value={toAmount.toLocaleString()} 
                    onChange={handleToAmountChange} 
                    placeholder='0' 
                    readOnly 
                />
            </div>
        </form>
    );
}