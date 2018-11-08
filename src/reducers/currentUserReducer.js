
import users from '../data/data'
import { SHOW_RANDOM_USER } from '../actions/showRandomUser'

const randomUser = () => {
   return users[Math.floor(Math.random() * users.length)]
}

const initialState = randomUser()

const reducer = (state = initialState, action={}) => {
  console.log(state)
  switch (action.type) {
    case SHOW_RANDOM_USER:
      return {...state} = randomUser();
    default:
      return state
  }
}

export default reducer

// const randomNum = Math.floor(Math.random() * users.length)

// export default function() {
//   return users[randomNum]
// }

