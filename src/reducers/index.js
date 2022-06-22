import { combineReducers } from 'redux'

import section from './section'
import feedImages from './feedImages'
import searchImages from './searchImages'
import query from './query'
import page from './page'
import loadingHome from './loadingHome'
import loadingSearch from './loadingSearch'
import loadingSearchMore from './loadingSearchMore'

export default combineReducers({
  section,
  feedImages,
  searchImages,
  query,
  page,
  loadingHome,
  loadingSearch,
  loadingSearchMore
})
