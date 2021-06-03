import React from 'react'
import InstrumentCard from './InstrumentCard'
import { useState } from 'react'

export default function SelectInstruments(props) {
    const [criteria, setCriteria] = useState('brass')

    const renderCards = () => {
        const filteredInstruments = props.instruments.filter(instrument => {
            return instrument.category === criteria
        })
        return filteredInstruments.map(instrument => {
            return <InstrumentCard 
                key={instrument.id} 
                addInstrumentsToCart={props.addInstrumentsToCart} 
                instrument={instrument} />
        })
    }

    const changeCriteria = (e) => {
        const newCriteria = e.target.value
        setCriteria(newCriteria)
    }

    return (
        <div className="selectInstruments"> 
            <label for="instrument">Select Instruments: </label>
            <select onChange={ changeCriteria } name="instrument-drop-down" id="instrument-button">
                <option value="brass">Brass</option>
                <option value="woodwind">Woodwind</option>
                <option value="percussion">Percussion</option>
            </select>
            <div className="instrument-cards-container">
                { renderCards() }
            </div>            
        </div>
    )
}
