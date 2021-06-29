import React from 'react'

export default function CurrencyRowone(props) {
    const{
        onChangeAmount,
        amount
    }=props
    return(
    <div className="converted">
        <input type="number" className="input" placeholder="Converted amount" value={amount} onChange={onChangeAmount} />
    </div>)
}