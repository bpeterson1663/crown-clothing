import { gql } from 'apollo-boost'
import { addItemToCart } from './cart.utils'
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
    cartItems @client
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

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems },
      })

      return newCartItems
    },
  },
}
