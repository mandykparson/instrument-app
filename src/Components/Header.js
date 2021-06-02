import React from 'react'
import SelectInstruments from "./SelectInstruments/SelectInstruments"
import ViewCart from "./ViewCart/ViewCart"
import HomePage from "./Homepage/Homepage"
import {
    BrowserRouter as Router, 
    Route,
    Link,
    Switch
} from 'react-router-dom'

export default function Header(props) {
    return (
        <Router>
            <div className="header">
                <h1>Colorado Band Association</h1>
                    <nav>
                        <Link to="/">HOME </Link>| 
                        <Link to="/selectinstruments"> Instrument Selection </Link>| 
                        <Link to="/viewcart">View Cart</Link>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <HomePage 
                            cart={props.cart}
                            instruments={props.instruments} />
                        </Route>
                        <Route exact path="/selectinstruments">
                            <SelectInstruments 
                            cart={props.cart}
                            instruments={props.instruments} 
                            addInstrumentsToCart={props.addInstrumentsToCart}
                            />
                        </Route>
                        <Route exact path="/viewCart">
                            <ViewCart 
                            removeInstrumentsFromCart={props.removeInstrumentsFromCart}
                            cart={props.cart}
                            instruments={props.instruments}
                            />
                        </Route>
                    </Switch>
            </div>
        </Router>
    )
}
