import React from 'react'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = ({ history, cartItems, toggleCartHidden }) => {
  return (
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
          toggleCartHidden()
          history.push('/checkout')
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  )
}

export default withRouter(CartDropdown)
