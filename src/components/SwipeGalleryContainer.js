import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SwipeGallery from './SwipeGallery'

class SwipeGalleryContainer extends React.Component {  
  render() {
    return (
      <SwipeGallery currentUser={this.props.currentUser}/>
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