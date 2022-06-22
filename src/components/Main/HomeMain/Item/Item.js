import React from 'react'

import './style.css'

const Item = ({ imageUrl }) => {
  return (
    <div className="item">
      <div
        className="img"
        style={{ background: `#EEEEEE url(${imageUrl}) center no-repeat` }}
        alt=""
      />
    </div>
  )
}

export default Item
