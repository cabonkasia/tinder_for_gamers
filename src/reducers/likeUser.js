import { ADD_TO_LIKED } from '../actions/like'

const liked = []
//liked array is just a part of the state that is available for this component
//this reducer takes that part and concatenates it with the rest of the state
//in tha return statement

//creates new prop liked
const reducer = (state = liked, action = {}) => {
  switch (action.type) {
  case ADD_TO_LIKED:
    return state.concat(action.payload)
    
  default:
    return state
  }
}

export default reducer
