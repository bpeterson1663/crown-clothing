import React, { useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import Spinner from '../../components/spinner/spinner.component'

const CollectionsContainer = lazy(() => import('../collection/collection.container'))
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container'),
)

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync])
  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionsContainer} />
      </Suspense>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
