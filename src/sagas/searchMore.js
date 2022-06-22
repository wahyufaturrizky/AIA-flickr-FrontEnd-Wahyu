import { put, call, select, takeEvery } from 'redux-saga/effects'

import { setSearchMore } from '../actions'
import { SEARCH } from '../actions/types'
import searchAPI from '../api/search'

export function* getSearch () {
  try {
    const query = yield select(({ query }) => query)
    const page = yield select(({ page }) => page)
    const data = yield call(searchAPI, { query, page })
    yield put(setSearchMore(data))
  } catch (error) {
    yield console.log(error.toString())
  }
}

export default function* () {
  yield takeEvery(SEARCH.GET_MORE, getSearch)
}
