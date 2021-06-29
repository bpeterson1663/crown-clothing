import React, { useContext } from 'react'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-dropdown.styles'
import { CartContext } from '../../providers/cart/cart.provider'

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext)
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
