import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)

export default CollectionsOverview
