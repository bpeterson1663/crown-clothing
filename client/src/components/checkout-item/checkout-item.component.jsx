import React, { useContext } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
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

const ADD_REMOVE_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`
const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext)
  return (
    <Mutation mutation={ADD_REMOVE_ITEM_TO_CART}>
      {({ addItemToCart, removeItemFromCart }) => (
        <CheckoutItemContainer>
          <ImageContainer>
            <CheckoutImage alt="item" src={imageUrl} />
          </ImageContainer>
          <InfoSpan>{name}</InfoSpan>
          <Quantity>
            <Arrow onClick={() => removeItemFromCart(cartItem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
          </Quantity>
          <InfoSpan>{price}</InfoSpan>
          <RemoveButton onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
      )}
    </Mutation>
  )
}

export default CheckoutItem
