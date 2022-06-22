import { fork } from 'redux-saga/effects'

import feed from './feed.js'
import search from './search.js'
import searchMore from './searchMore.js'

export default function* () {
  yield fork(feed)
  yield fork(search)
  yield fork(searchMore)
}
