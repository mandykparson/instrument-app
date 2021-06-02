import React from 'react'
import SelectInstruments from "./SelectInstruments/SelectInstruments"
import ViewCart from "./ViewCart/ViewCart"

export default function Header() {
    return (
        <div className="header">
            <h1>Colorado Band Association</h1>
            <p>header is green</p>
            <SelectInstruments />
            <ViewCart />
        </div>
    )
}
