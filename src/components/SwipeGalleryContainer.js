import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SwipeGallery from './SwipeGallery'
import users from '../data/data'


class SwipeGalleryContainer extends React.Component {  
  render() {
    
    const next = users.indexOf(this.props.currentUser) + 1
    console.log(next)
    return (
      <SwipeGallery currentUser={users[next]}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(SwipeGalleryContainer)