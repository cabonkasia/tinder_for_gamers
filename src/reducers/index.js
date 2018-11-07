import { combineReducers } from 'redux'
import randomUser from './randomUser'

import userReducer from './userReducer'

export default combineReducers({
  randomUser,
  users: userReducer
})