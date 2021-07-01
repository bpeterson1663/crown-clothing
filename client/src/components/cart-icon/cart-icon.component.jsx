import React, { useContext } from 'react'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-dropdown.styles'
import { CartContext } from '../../providers/cart/cart.provider'

const CartIcon = ({ toggleCartHidden }) => {
  const { cartItemsCount } = useContext(CartContext)
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
