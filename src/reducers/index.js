import { combineReducers } from 'redux'

import userReducer from './userReducer'
import currentUserReducer from './currentUserReducer'
import matchListReducer from './matchListReducer'

export default combineReducers({
  users: userReducer,
  currentUser: currentUserReducer,
  matchList: matchListReducer
})