import { gql } from 'apollo-boost'

export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
` //Type definitions need to be capitalized

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
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
  },
}
