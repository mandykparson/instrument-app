import React from 'react'

export default function InstrumentCard(props) {
    //console.log(instrument)

    const handleClick = () => {
        props.addInstrumentsToCart(props.instrument)
    }
    return (
        <div className="instrument-card">
            <img className="card-image" src={props.instrument.image} alt={props.instrument.instrument}/>
            <div className="card-container">
            <h3>{props.instrument.instrument}</h3>
            <div className="button-container">
                {/* <button onClick={handleClick}>Rent ${props.instrument.rent}</button> */}
                <button onClick={handleClick}>Buy ${props.instrument.price}</button>
                </div>
            </div>
        </div>
    )
}
