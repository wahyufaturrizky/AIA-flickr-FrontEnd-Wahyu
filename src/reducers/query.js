import { QUERY } from '../actions/types'

export default (state = '', { type, query }) => {
  switch (type) {
    case QUERY.SET:
      return query
    default:
      return state
  }
}
