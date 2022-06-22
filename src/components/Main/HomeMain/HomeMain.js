import React from 'react'
import { connect } from 'react-redux'

import './style.css'
import Item from './Item'
import Loading from '../../../assets/logo/flickr-loading.gif'

const HomeMain = ({ feedImages, loadingHome }) => {
  const Items = () => {
    return feedImages && feedImages.map(img => {
      const { image } = img
      return (
        <Item
          key={image}
          imageUrl={image}
        />
      )
    })
  }

  const content = () => {
    if (loadingHome) return (<img className="loading" src={Loading} alt=""/>)
    return Items()
  }

  return <div className="home-main">{content()}</div>
}

const mapStateToProps = ({ feedImages, loadingHome }) => ({
  feedImages,
  loadingHome
})

export default connect(mapStateToProps)(HomeMain)
