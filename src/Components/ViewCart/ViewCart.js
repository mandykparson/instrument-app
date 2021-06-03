import React from 'react'
import ShoppingCard from './ShoppingCard'

export default function ViewCart(props) {
    const finalPrice = () => {
        let price = 0
        props.cart.map(instrument => {
            return price = price + instrument.price
        })
        let fprice = price.toFixed(2)
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
            <div className="shopping-cards-container">
                {renderCards()}
            </div>
            <div className="checkout">
                <h2>Checkout Total: ${finalPrice()}</h2>
            </div>
        </div>
    )
}
