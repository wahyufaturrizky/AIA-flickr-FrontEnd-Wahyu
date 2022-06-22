import { put, call, select, takeEvery } from 'redux-saga/effects'

import { setSearch } from '../actions'
import { SEARCH } from '../actions/types'
import searchAPI from '../api/search'

export function* getSearch ({ query }) {
  try {
    const page = yield select(({ page }) => page)
    const data = yield call(searchAPI, { query, page })
    yield put(setSearch(data))
  } catch (error) {
    yield console.log(error.toString())
  }
}

export default function* () {
  yield takeEvery(SEARCH.GET, getSearch)
}
