import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { addToLike } from '../actions/like'
import { showRandomUser } from '../actions/showRandomUser'
import LikeButton from './LikeButton';

class LikeButtonContainer extends Component {

  handleClick = () => {
    this.props.addToLike(this.props.currentUser)
    this.props.showRandomUser(this.props.currentUser)
    //this.props.addToNotDisplayed(this.props.notDisplayed)
} 

render() {
  // console.log(this.props)
  return (
    <LikeButton handler={this.handleClick}/>
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
export default connect (mapStateToProps, { addToLike, showRandomUser })(LikeButtonContainer)