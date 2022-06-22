import React from 'react'
import { connect } from 'react-redux'

import { backSection, getSearch, setQuery } from '../../../actions'
import './style.css'
import BackIcon from './back'
import SearchIcon from './search'

const SearchHeader = ({ query, setQuery, backSection, getSearch }) => {
  const onSearch = ({ type, key }) => (type === 'click' || key === 'Enter') && getSearch(query)
  const onTyping = ({ target }) => setQuery(target.value)
  return (
    <div className="search-header">
      <BackIcon onClick={backSection} />
      <input
        type="text"
        placeholder="search"
        spellCheck="false"
        onChange={onTyping}
        onKeyDown={onSearch}
        value={query}
      />
      <SearchIcon onClick={onSearch} />
    </div>
  )
}

const mapStateToProps = ({ query }) => ({
  query
})

const mapDispatchToProps = dispatch => ({
  backSection: () => dispatch(backSection()),
  getSearch: keyword => dispatch(getSearch(keyword)),
  setQuery: value => dispatch(setQuery(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader)
