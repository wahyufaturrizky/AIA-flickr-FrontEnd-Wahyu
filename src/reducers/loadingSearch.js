import { SEARCH } from '../actions/types'

export default (state = false, { type }) => {
  switch (type) {
    case SEARCH.GET:
      return true
    case SEARCH.SET:
      return false
    default:
      return state
  }
}
