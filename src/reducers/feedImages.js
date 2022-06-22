import { FEED } from '../actions/types'

export default (state = [], { type, feedImages }) => {
  switch (type) {
    case FEED.SET:
      return feedImages.images
    default:
      return state
  }
}
