import { SEARCH, FEED } from '../actions/types'

export default (state = 1, { type }) => {
  switch (type) {
    case SEARCH.GET_MORE:
      return state + 1
    case SEARCH.GET:
    case FEED.GET:
      return 1
    default:
      return state
  }
}
