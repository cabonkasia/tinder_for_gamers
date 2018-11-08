
import users from '../data/data'
import { SHOW_RANDOM_USER } from '../actions/showRandomUser'

const randomUser = () => {
   return users[Math.floor(Math.random() * users.length)]
}

const initialState = randomUser()

const reducer = (state = initialState, action={}) => {
   switch (action.type) {
    case SHOW_RANDOM_USER:
       return {...state} = randomUser();
    default:
      return state
  }
}

export default reducer



