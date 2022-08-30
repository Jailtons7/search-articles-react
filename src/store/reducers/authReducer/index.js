import { IS_LOGGED } from "../../types"

const initialState = {
  logged: false,
  loading: true
}

const loggedReducer = (state=initialState, action) => {
  switch(action.type) {
    case IS_LOGGED:
      return {
        ...state,
        logged: action.payload,
        loading: false
      }
    default: return state
  }
}

export default loggedReducer
