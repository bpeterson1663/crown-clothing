import { gql } from 'apollo-boost'
import { addItemToCart, getCartItemsCount, getCartTotal } from './cart.utils'
export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
` //Type definitions need to be capitalized

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`

const GET_CART_ITEMS = gql`
  {
    cartItems @client,
    total @client
  }
`

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`
//https://www.apollographql.com/docs/apollo-server/data/resolvers/
export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }, _info) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      })
      console.log('cartHidden: ', cartHidden)
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      })

      return !cartHidden
    },
    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      })

      const newCartItems = addItemToCart(cartItems, item)
      const newTotal = getCartTotal(cartItems)
      cache.writeQuery({
        query: GET_ITEM_COUNT,
        data: { itemCount: getCartItemsCount(newCartItems) },
      })

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems, total: newTotal },
      })

      return newCartItems
    },
  },
}
