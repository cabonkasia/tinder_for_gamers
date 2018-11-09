import { combineReducers } from 'redux'

import userReducer from './userReducer'
import currentUserReducer from './currentUserReducer'
import likeUser from './likeUser'

export default combineReducers({
  userReducer,
  currentUser: currentUserReducer,
  likedUsers: likeUser
})