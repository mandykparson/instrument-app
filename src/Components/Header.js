import React from 'react'
import SelectInstruments from "./SelectInstruments/SelectInstruments"
import ViewCart from "./ViewCart/ViewCart"

export default function Header() {
    return (
        <div>
            <h1>Colorado Band Association</h1>
            <SelectInstruments />
            <ViewCart />
        </div>
    )
}
