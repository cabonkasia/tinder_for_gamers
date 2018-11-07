import { combineReducers } from 'redux'

import userReducer from './userReducer'
import currentUserReducer from './currentUserReducer'

export default combineReducers({
  users: userReducer,
  currentUser: currentUserReducer
})