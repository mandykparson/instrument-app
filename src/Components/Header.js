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

export default function Header() {
    return (
        <Router>
            <div className="header">
                <h1>Colorado Band Association</h1>
                    <nav>
                        <Link to="/">HOME </Link>| 
                        <Link to="/selectinstruments"> Rent or Buy </Link>| 
                        <Link to="/viewcart">View Cart</Link>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/selectinstruments">
                            <SelectInstruments />
                        </Route>
                        <Route exact path="/viewCart">
                            <ViewCart />
                        </Route>
                    </Switch>
            </div>
        </Router>
    )
}
