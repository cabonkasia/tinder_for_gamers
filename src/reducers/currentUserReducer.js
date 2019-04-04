import users from '../data/data'
import { SHOW_NEXT_USER } from '../actions/showNextUser'
import { connect } from 'react-redux'

// const randomUser = () => {
//    return users[Math.floor(Math.random() * users.length)]
// }

const initialState = users[0]


// const initialState = randomUser()

const reducer = (state = initialState, action={}) => {
   switch (action.type) {
    case SHOW_NEXT_USER:
       return action.payload;
    default:
      return state
  }
}

export default reducer


// var arr = [1,2,3,4],
//     brr = [2,4],
//     crr = [5,6]
//     res = arr.filter(f => !brr.concat(crr).includes(f));
// console.log(res);



