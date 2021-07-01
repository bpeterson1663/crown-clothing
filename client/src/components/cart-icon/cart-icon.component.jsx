import React from 'react'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-dropdown.styles'

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
