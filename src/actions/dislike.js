export const ADD_TO_DISLIKED = 'ADD_TO_DISLIKED'

export function addToDislike (currentUserParam) {
  return {
  type: ADD_TO_DISLIKED,
  payload: currentUserParam
  }