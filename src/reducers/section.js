import { SECTION } from '../actions/types'

const initState = {
  prev: SECTION.HOME,
  current: SECTION.HOME
}

export default (state = initState, { type, section }) => {
  switch (type) {
    case SECTION.CHANGE:
      return { current: section, prev: state.current }
    case SECTION.BACK:
      return { current: state.prev }
    default:
      return state
  }
}
