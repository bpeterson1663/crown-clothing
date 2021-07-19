import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { CollectionsOverviewContianer } from './collections-overview.styles'

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContianer>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </CollectionsOverviewContianer>
)

export default CollectionsOverview
