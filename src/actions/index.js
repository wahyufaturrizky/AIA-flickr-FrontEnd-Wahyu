import { SECTION, FEED, SEARCH, QUERY } from './types'

export const changeSection = section => ({
  type: SECTION.CHANGE,
  section
})

export const backSection = () => ({
  type: SECTION.BACK
})

export const getFeed = () => ({
  type: FEED.GET
})

export const setFeed = feedImages => ({
  type: FEED.SET,
  feedImages
})

export const getSearch = query => ({
  type: SEARCH.GET,
  query
})

export const setSearch = searchImages => ({
  type: SEARCH.SET,
  searchImages
})

export const getSearchMore = () => ({
  type: SEARCH.GET_MORE
})

export const setSearchMore = searchImages => ({
  type: SEARCH.SET_MORE,
  searchImages
})

export const setQuery = query => ({
  type: QUERY.SET,
  query
})
