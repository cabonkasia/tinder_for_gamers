import { ADD_TO_DISLIKED } from '../actions/dislike'

const disliked = []
//liked array is just a part of the state that is available for this component
//this reducer takes that part and concatenates it with the rest of the state
//in tha return statement

//creates new prop disliked
const reducer = (state = disliked, action = {}) => {
  switch (action.type) {
  case ADD_TO_DISLIKED:
    return state.concat(action.payload)
        
  default:
    return state
  }
}

export default reducer