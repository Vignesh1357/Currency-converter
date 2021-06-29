import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div>
      <select className="selectrow" onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <input type="number" className="input" value={amount} placeholder="Enter amount in USD" onChange={onChangeAmount} />
    </div>
  )
}
