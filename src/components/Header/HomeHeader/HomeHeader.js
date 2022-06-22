import React from 'react'
import { connect } from 'react-redux'

import { changeSection } from '../../../actions'
import { SECTION } from '../../../actions/types'
import './style.css'
import SearchIcon from './search'
import Logo from '../../../assets/logo/flickr.png'

const HomeHeader = ({ changeSection }) => {
  const onSearch = () => changeSection(SECTION.SEARCH)

  return (
    <div className="home-header">
      <img src={Logo} alt="flickr" />
      <SearchIcon onClick={onSearch} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeSection: section => dispatch(changeSection(section))
})

export default connect(null, mapDispatchToProps)(HomeHeader)
