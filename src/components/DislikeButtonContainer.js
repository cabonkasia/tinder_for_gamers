import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { addToDislike } from '../actions/dislike'
import { showRandomUser } from '../actions/showRandomUser'
import DislikeButton from './DislikeButton';

class DislikeButtonContainer extends Component {

  handleClick = () => {
    this.props.addToDislike(this.props.currentUser)
    this.props.showRandomUser(this.props.currentUser)
    //this.props.addToNotDisplayed(this.props.notDisplayed)
} 

render() {
  // console.log(this.props)
  return (
    <DislikeButton handler={this.handleClick}/>
  )
}
}

//we define mapStateToProps to make sure this component communicates to state

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser //currentUserReducer must be updated
  }
}

//connect add dispatch method and props
//{ addToLike } below makes sure we don't need to use dispatch method
export default connect (mapStateToProps, { addToDislike, showRandomUser })(DislikeButtonContainer)