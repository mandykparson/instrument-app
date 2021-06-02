import React, { Component } from 'react'
import './App.css'
import Header from "./Components/Header"
import HomePage from "./Components/Homepage/Homepage"

export default class App extends Component {
    state = {
      cart: [],
      instruments: []
    }

  componentDidMount() {
    fetch('http://localhost:3000/instruments')
      .then(res => res.json())
      .then((instruments) => this.setState({
        instruments 
      }))
  }

  addInstrumentsToCart = (instrumentsToAdd) => {
    //console.log(instrumentsToAdd)
    const purchasedItem = this.state.cart
    this.setState({
      cart: [...purchasedItem, instrumentsToAdd]
    })
    console.log(this.state.cart)
  }

  removeInstrumentsFromCart = (instrumentsToTake) => {
    const removeItem = this.state.cart.filter(item => {
      return (
      item.id !== instrumentsToTake.key)})
    this.setState({
      cart: [...removeItem]
    })
  }

  render() {
    return (
      <div className="app">
        <p>app.js is purple</p>
        <Header 
        cart={this.state.cart} 
        instruments={this.state.instruments}
        addInstrumentsToCart={this.addInstrumentsToCart}
        removeInstrumentsFromCart={this.removeInstrumentsFromCart}
        />
        <div className="footer">
          This is our footer
        </div>
      </div>
    )
  }
}

