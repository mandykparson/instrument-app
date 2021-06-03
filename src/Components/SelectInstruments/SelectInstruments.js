import { render } from '@testing-library/react'
import React from 'react'
import InstrumentCard from './InstrumentCard'

export default function SelectInstruments(props) {
    const renderCards = () => {
        return props.instruments.map(instrument => {
            return <InstrumentCard 
                key={instrument.id} 
                addInstrumentsToCart={props.addInstrumentsToCart} 
                instrument={instrument} />
        })
    }
    // const dropDownButton = (e) => {
    //     console.log(e.target)
    // }
    return (
        <div className="selectInstruments">
            
            <label for="instrument">Select Instruments:</label>

            <select name="instrument-drop-down" id="instrument-button">
                <option value="brass">Brass</option>
                <option value="woodwind">Woodwind</option>
                <option value="percussion">Percussion</option>
            </select>
            <div className="instrument-cards-container">
            {renderCards()}
            </div>
            {/* <h1>{props.instruments[0].instrument}</h1>
            <h2>$20</h2> */}
            
        </div>
    )
}
