import React from 'react'
import { connect } from 'react-redux'

import { SECTION } from '../../actions/types'
import './style.css'
import HomeHeader from './HomeHeader'
import SearchHeader from './SearchHeader'

const Header = ({ section }) => {
  const setHeader = () => {
    switch (section) {
      case SECTION.SEARCH:
        return <SearchHeader />
      case SECTION.HOME:
      default:
        return <HomeHeader />
    }
  }
  return <div className="header">{setHeader()}</div>
}

const mapStateToProps = ({ section }) => ({
  section: section.current
})

export default connect(mapStateToProps)(Header)
