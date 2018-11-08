import * as React from 'react'
import Footer from './Footer'
//import { connect } from 'react-redux'

export default class FooterContainer extends React.Component {

addToLiked = () => {
  this.props.dispatch({
    type: 'ADD_TO_LIKED',
    payload: {
      liked: [this.props.currentUser]
    }
  }
  )
}

render() {
  return <Footer addToLiked={this.addToLiked} />
}
}

//export default connect()(FooterContainer);