import { SEARCH } from '../actions/types'

export default (state = [], { type, searchImages }) => {
  switch (type) {
    case SEARCH.SET:
      return searchImages.images
    case SEARCH.SET_MORE:
      return [...state, ...searchImages.images]
    default:
      return state
  }
}
