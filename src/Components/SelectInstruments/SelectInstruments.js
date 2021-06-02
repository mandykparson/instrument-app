import { render } from '@testing-library/react'
import React from 'react'
import InstrumentCard from './InstrumentCard'

export default function SelectInstruments(props) {
    const renderCards = () => {
        return props.instruments.map(instrument => {
            //console.log(instrument)
             return <InstrumentCard instrument={instrument} />
         })
    }
    //const {instrument, price, rent, category, image} = instruments
    //console.log(props.instruments)
    

    return (
        <div className="selectInstruments">
            Select Instruments
            {renderCards()}
            {/* <h1>{props.instruments[0].instrument}</h1>
            <h2>$20</h2> */}
            
        </div>
    )
}
