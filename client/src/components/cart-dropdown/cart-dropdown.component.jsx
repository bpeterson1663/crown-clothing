import React from 'react'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden())
        history.push('/checkout')
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
