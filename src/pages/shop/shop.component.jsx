import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsContainer from '../collection/collection.container'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'

class ShopPage extends Component {
  state = {
    loading: true,
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionsContainer} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
