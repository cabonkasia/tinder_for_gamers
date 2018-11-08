//>>>ACTION CREATOR<<<//

//markup and logic
//THINGS IT DOES:
//- it takes the currentUser and puts it in the liked array
//- it updates the state by removing the currentUser from the state (so it doesn't appear in home again) 
//- it gets another random user and puts it in the state
//- it displays that new user's photo, name and age

export const ADD_TO_LIKED = 'ADD_TO_LIKED'
//export const ADD_TO_NOT_DISPLAYED = 'ADD_TO_NOT_DISPLAYED'

//below function returns an object with properties: type and payload
export function addToLike (currentUserParam) {
  return {
  type: ADD_TO_LIKED,
  payload: currentUserParam
  }
} 

// export function addToNotDisplayed (notDisplayedParam) {
//   return {
//     type: ADD_TO_NOT_DISPLAYED,
//     payload: [notDisplayedParam]
//   }
// }
 