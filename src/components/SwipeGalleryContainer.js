import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SwipeGallery from './SwipeGallery'

class SwipeGalleryContainer extends React.Component {  
  render() {
    return (
      <SwipeGallery users={this.props.users}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(SwipeGalleryContainer)