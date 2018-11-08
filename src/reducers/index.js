import { combineReducers } from 'redux'

import userReducer from './userReducer'
import currentUserReducer from './currentUserReducer'
import likeUser from './likeUser'

export default combineReducers({
  // likeUser,
  userReducer,
  currentUser: currentUserReducer,
  likedUsers: likeUser
})