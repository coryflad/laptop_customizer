import React from 'react'
import Summary from '../Summary/Summary'
import Total from '../Total/Total'
import './Cart.css'

class Cart extends React.Component {
    render() {
        return (
            <div>
                <Summary />
                <Total />
            </div>
        )
    }
 }

 export default Cart
