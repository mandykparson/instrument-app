import React from 'react'

export default function ShoppingCard(props) {
    const handleClick = () => {
        props.removeInstrumentsFromCart(props.instrument)
    }

    
    return (
        <div className="instrument-card">
            <img className="card-image" src={props.instrument.image} />
            <div className="card-container">
                <h3>{props.instrument.instrument}</h3>
                <div className="button-container">
                    <button onClick={ handleClick }>X</button>
                </div>
            </div>
        </div>
    )
}