import { ADD_TO_MATCH_LIST } from "../actions/addToMatchList";

const matchList = []

export default (state = matchList, action) => {
  switch (action.type) {
    case ADD_TO_MATCH_LIST:
      return state = [26]
  default:
    return state = [18]
  }
}