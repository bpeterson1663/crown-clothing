import React, { useContext } from 'react'
import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutImage,
  InfoSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles'
import { CartContext } from '../../providers/cart/cart.provider'

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext)
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage alt="item" src={imageUrl} />
      </ImageContainer>
      <InfoSpan>{name}</InfoSpan>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <InfoSpan>{price}</InfoSpan>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
