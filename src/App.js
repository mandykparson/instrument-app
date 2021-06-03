import React, { Component } from 'react'
import './App.css'
import Header from "./Components/Header"

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
    const noRepeatInstruments = this.state.cart.filter(instrument => {
      return instrument.id !== instrumentsToAdd.id
    })
    this.setState({
      cart: [...noRepeatInstruments, instrumentsToAdd]
    })
    console.log(this.state.cart)
  }

  removeInstrumentsFromCart = (instrumentsToTake) => {
    const removeItem = this.state.cart.filter(item => {
      return (
      item.id !== instrumentsToTake.id)})
    this.setState({
      cart: removeItem
    })
  }

  render() {
    return (
      <div className="app">
        <Header 
        cart={this.state.cart} 
        instruments={this.state.instruments}
        addInstrumentsToCart={this.addInstrumentsToCart}
        removeInstrumentsFromCart={this.removeInstrumentsFromCart}
        />
        <div className="footer">
          Colorado Band Master Association copyright
        </div>
      </div>
    )
  }
}

