import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'
import { CartContext } from '../../providers/cart/cart.provider'
const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext)
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
          toggleHidden()
          history.push('/checkout')
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  )
}

export default withRouter(CartDropdown)
