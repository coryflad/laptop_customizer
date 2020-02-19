import React from 'react'
import Summary from '../Summary/Summary'
import Total from '../Total/Total'
import './Cart.css'

class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h3>SHOPPING CART</h3>
        < Summary selected={this.props.selected} />
        < Total selected={this.props.selected} />
      </section>
    )
  }
}

export default Cart