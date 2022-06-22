import React from 'react'
import { connect } from 'react-redux'

import { getSearchMore } from '../../../actions'
import './style.css'
import Item from './Item'
import Loading from '../../../assets/logo/flickr-loading.gif'

const SearchMain = ({ searchImages, getSearchMore, loadingSearch, loadingSearchMore }) => {
  const loadMore = () => getSearchMore()

  const Items = () => {
    return searchImages && searchImages.map(news => {
      return (
        <Item
          key={news.image}
          imageUrl={news.image}
        />
      )
    })
  }

  const content = () => {
    if (loadingSearch) return (<img className="loading" src={Loading} alt=""/>)
    return (
      <>
        {Items()}
        <button className="load-more" onClick={loadMore}>
          {loadingSearchMore ? 'Loading...' : 'Load More'}
        </button>
      </>
    )
  }

  return <div className="search-main">{content()}</div>
}

const mapStateToProps = ({ searchImages, loadingSearch, loadingSearchMore }) => ({
  searchImages,
  loadingSearch,
  loadingSearchMore
})

const mapDispatchToProps = dispatch => ({
  getSearchMore: () => dispatch(getSearchMore())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchMain)
