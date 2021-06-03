import React from 'react'
import ShoppingCard from './ShoppingCard'

export default function ViewCart(props) {
    const finalPrice = () => {
        let price = 0
        let fprice = price.toFixed(2)
        props.cart.map(instrument => {
            price = price + instrument.price
        })
        return fprice
        
    }
    const renderCards = () => {
        return props.cart.map(instrument => {
            return <ShoppingCard
                key={instrument.id} 
                removeInstrumentsFromCart={props.removeInstrumentsFromCart} 
                instrument={instrument} 
                />
        })
    }
    return (
        <div className="viewCart">
            View Cart
            {renderCards()}
            <h1>Checkout</h1>
            <div className="checkout-price">
            <p>${finalPrice()}</p>
            </div>
            
        </div>
    )
}
