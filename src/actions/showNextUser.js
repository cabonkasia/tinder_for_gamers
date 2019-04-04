
export const SHOW_NEXT_USER = 'SHOW_NEXT_USER'

export function showNextUser(nextUserIndex) {
  return {
    type: SHOW_NEXT_USER,
    payload: nextUserIndex
  }
}