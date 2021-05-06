import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${title}`)}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subitlte">SHOP NOW</span>
    </div>
  </div>
)

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
}

export default withRouter(MenuItem)
