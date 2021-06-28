import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'
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

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem

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
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
