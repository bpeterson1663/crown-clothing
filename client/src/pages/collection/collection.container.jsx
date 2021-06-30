// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import { createStructuredSelector } from 'reselect'
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
// import WithSpinner from '../../components/with-spinner/with-spinner.component'
// import CollectionPage from './collection.component'

// const mapStateToProps = createStructuredSelector({
//   isLoading: (state) => !selectIsCollectionsLoaded(state),
// })

// const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage)

// export default CollectionPageContainer
import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import CollectionPage from './collection.component'
import Spinner from '../../components/spinner/spinner.component'

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!){
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

const CollectionsPageContainer = ({ match }) => (
  <Query query={GET_COLLECTION_BY_TITLE} variables={{ title: match.params.collectionId }}>
    {
    ({ loading, data }) => {
      if(loading) return <Spinner />
      const { getCollectionsByTitle } = data
      return <CollectionPage collection={getCollectionsByTitle} />
    }
    }
  </Query>
)

export default CollectionsPageContainer