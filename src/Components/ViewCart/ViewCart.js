import React from 'react'
import ShoppingCard from './ShoppingCard'

export default function ViewCart(props) {
    const finalPrice = () => {
        let price = 0
        props.cart.map(instrument => {
            price = price + instrument.price
        })
        return price
        
    }
    const renderCards = () => {
        return props.cart.map(instrument => {
            //console.log(instrument)
             return <ShoppingCard
             key={instrument.id} 
             removeInstrumentsFromCart={props.removeInstrumentsFromCart} 
             instrument={instrument} />
         })
        }
    return (
        <div className="viewCart">
            View Cart
            {renderCards()}
            <h1>Checkout</h1>
            {finalPrice()}
            
        </div>
    )
}
