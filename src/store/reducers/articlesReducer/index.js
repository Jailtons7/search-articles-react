import { GET_ARTICLES } from "../../types"

const initialState = {
  articles: [],
  loading: true
}

const articlesReducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false
      }
    default: return state
  }
}

export default articlesReducer
