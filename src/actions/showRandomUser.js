
export const SHOW_RANDOM_USER = 'SHOW_RANDOM_USER'

export function showRandomUser(randomUserParam) {
  return {
    type: SHOW_RANDOM_USER,
    payload: randomUserParam
  }
}