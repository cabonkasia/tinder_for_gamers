import users from '../data/users'

const availableUsers = JSON.parse(JSON.stringify(users))

const currentUser = availableUsers["gamerholics"][0]


export default currentUser