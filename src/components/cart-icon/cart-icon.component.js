import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  const quantity = cartItems.reduce((acc, item) => (acc += item.quantity), 0)

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
