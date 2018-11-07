
import users from '../data/data'

const randomNum = Math.floor(Math.random() * users.length)

export default function() {
  return users[randomNum]
}