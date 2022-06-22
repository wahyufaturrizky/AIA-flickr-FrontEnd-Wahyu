import { put, call, takeEvery } from 'redux-saga/effects'

import { setFeed } from '../actions'
import { FEED } from '../actions/types'
import feedAPI from '../api/feed'

export function* getFeed () {
  try {
    const data = yield call(feedAPI)
    yield put(setFeed(data))
  } catch (error) {
    yield console.log(error.toString())
  }
}

export default function* () {
  yield takeEvery(FEED.GET, getFeed)
}
