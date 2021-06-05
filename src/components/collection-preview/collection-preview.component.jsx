import React from 'react'
import { CollectionPreviewContainer, Title, Preview } from './collection-preview.styles'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
)

export default CollectionPreview
