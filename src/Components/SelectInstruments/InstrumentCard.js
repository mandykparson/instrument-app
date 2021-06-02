import React from 'react'

export default function InstrumentCard({instrument}) {
    console.log(instrument)
    return (
        <div>
            <h1>{instrument.instrument}</h1>
        </div>
    )
}
