import { FEED } from '../actions/types'

export default (state = false, { type }) => {
  switch (type) {
    case FEED.GET:
      return true
    case FEED.SET:
      return false
    default:
      return state
  }
}
