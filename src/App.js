import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './currency_rows';
import CurrencyRowone from './currency_rowsone'

const BASE_URL = 'https://currencyapi.net/api/v1/rates?key=mCKrT3G15m4LvZSWfQ1WAg5QNddnbFXE1kyN'


function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState()

  let toAmount, fromAmount

   toAmount = amount
   fromAmount = amount * exchangeRate

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {

            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(Object.keys(data.rates))
            setToCurrency(data.base)
        })
  }, [])

  useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}&from=${ fromCurrency}&symbols=${ toCurrency}}`)
            .then(res => res.json())
            .then(data => {
                setExchangeRate(data.rates[toCurrency])
            })
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
  }

  return (
      <>
            <h1>Currency-Converter</h1>
            <div className="card">
            <h3>Enter amount in USD to convert it to specified currency</h3>
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => {setToCurrency(e.target.value)
                                        }}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
            />

            <CurrencyRowone
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => {setFromCurrency(e.target.value)
                                       }}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
            />
            </div>
      </>

  );
}

export default App;