import * as React from 'react'


const initialState = this.props.users.map(user => user.name)


 export default (state = initialState, action = {}) => {
  switch (action.type) {
  case 'RANDOM_USER' :
    return [
      ...state,
      initialState[Math.floor(Math.random() * initialState.length)]
    ]
  default:
    return state
  }
}









