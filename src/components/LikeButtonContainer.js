import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { addToLike } from '../actions/like'
import { showRandomUser } from '../actions/showRandomUser'
//import { showMatch } from '../actions/matchNotification'
import LikeButton from './LikeButton';
import MatchNotification from './MatchNotification'

class LikeButtonContainer extends Component {

  state = { showComponent: false};

  handleClick = () => {
    this.props.addToLike(this.props.currentUser)
    this.props.showRandomUser(this.props.currentUser)
    //this.props.showMatch(this.props.showComponent)
    this.setState({showComponent: true});
    //this.props.addToNotDisplayed(this.props.notDisplayed)
} 

render() {
  // console.log(this.props)
  return (
    <div>
    <LikeButton handler={this.handleClick}/>
    {
      this.state.showComponent && <MatchNotification />
    }
   </div>
  )
}
}

//we define mapStateToProps to make sure this component communicates to state

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser, //currentUserReducer must be updated
    //showComponent: state.showComponent
  }
}

//connect add dispatch method and props
//{ addToLike } below makes sure we don't need to use dispatch method
export default connect (mapStateToProps, { addToLike, showRandomUser })(LikeButtonContainer)