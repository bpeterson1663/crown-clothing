import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import CheckoutPage from './checkout.component'
import Spinner from '../../components/spinner/spinner.component'
const GET_CART_ITEMS = gql`
  {
    cartItems @client
    total @client
  }
`

const CheckoutContainer = () => (
  <Query query={GET_CART_ITEMS}>
    {({ loading, data }) => {
      if (loading) return <Spinner />
      const { cartItems, total } = data
      return <CheckoutPage cartItems={cartItems} total={total} />
    }}
  </Query>
)

export default CheckoutContainer
