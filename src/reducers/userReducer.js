import users from '../data/users.json'

export default function() {
  return JSON.parse(JSON.stringify(users.gamerholics))  
}