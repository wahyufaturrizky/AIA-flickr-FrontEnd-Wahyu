import React from 'react'
import { connect } from 'react-redux'

import { SECTION } from '../../actions/types'
import './style.css'
import HomeMain from './HomeMain'
import SearchMain from './SearchMain'

const Main = ({ section }) => {
  const setMain = () => {
    switch (section) {
      case SECTION.SEARCH:
        return <SearchMain />
      case SECTION.HOME:
      default:
        return <HomeMain />
    }
  }
  return <div className="main">{setMain()}</div>
}

const mapStateToProps = ({ section }) => ({
  section: section.current
})

export default connect(mapStateToProps)(Main)
