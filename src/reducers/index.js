import { combineReducers } from 'redux'

import userReducer from './userReducer'
import currentUserReducer from './currentUserReducer'
import likeUser from './likeUser'
import dislikeUser from './dislikeUser'

export default combineReducers({
  userReducer,
  currentUser: currentUserReducer,
  likedUsers: likeUser,
  dislikeUser
})