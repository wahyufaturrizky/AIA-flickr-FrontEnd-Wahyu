import { SEARCH } from '../actions/types'

export default (state = false, { type }) => {
  switch (type) {
    case SEARCH.GET_MORE:
      return true
    case SEARCH.SET_MORE:
      return false
    default:
      return state
  }
}
