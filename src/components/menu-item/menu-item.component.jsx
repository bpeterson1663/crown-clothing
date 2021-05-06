import React from 'react'
import PropTypes from 'prop-types'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subitlte">SHOP NOW</span>
    </div>
  </div>
)

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
}

export default MenuItem
