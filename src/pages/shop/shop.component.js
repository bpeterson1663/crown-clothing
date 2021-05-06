import React, { Component } from 'react'
import { SHOP_DATA } from '../../data/seed'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
