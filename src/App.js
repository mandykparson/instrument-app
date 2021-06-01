import React, { Component } from 'react'
import Header from "./Components/Header"
import HomePage from "./Components/Homepage/Homepage"

export default class App extends Component {
    state = {
      cart: [],
      instruments: []
    }

  // componentDidMount() {
  //   fetch('http://localhost:3000/for-sale')
  //     .then(res => res.json())
  // }

  //addInstrumentsToCart 

  //removeInstrumentsFromCart

  render() {
    return (
      <div>
        <Header />
        <HomePage />
        <div className="footer">
          This is our footer
        </div>
      </div>
    )
  }
}

