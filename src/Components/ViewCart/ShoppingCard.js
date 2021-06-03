import React from 'react'
import { useState } from 'react'

export default function ShoppingCard(props) {
    const [amount, setAmount] = useState(1)

    const handleClick = () => {
        props.removeInstrumentsFromCart(props.instrument)
    }

    const increaseAmount = () => {
        let newAmount = amount + 1
        setAmount(newAmount)
    }

    const decreaseAmount = () => {
        let newAmount = amount - 1
        setAmount(newAmount)
    }

    return (
        <div className="shopping-card">
            <img className="card-image" src={props.instrument.image} alt={props.instrument.instrument}/>
            <div className="card-container">
                <h3>{props.instrument.instrument}</h3>
                <div className="button-container">
                    <button onClick={ handleClick }>X</button>
                    <button onClick={ decreaseAmount }>-</button>
                    <h2>{amount}</h2>
                    <button onClick={ increaseAmount }>+</button>
                </div>
            </div>
        </div>
    )
}