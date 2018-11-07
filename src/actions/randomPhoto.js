import * as React from 'react'
import { connect } from 'react-redux'
import randomUser from './randomUser'

const RANDOM_USER = 'RANDOM_USER'

export const randomUser = () => {
  this.props.dispatch({
    type: RANDOM_USER,
    payload: {
      currentUser: this.props.users(Math.floor(Math.random() * this.props.users.length-1))
    }
  }
  )
}

function mapStateToProps(state) {
  return {
    randomUser
  }
}

export default connect(mapStateToProps)(randomUser)