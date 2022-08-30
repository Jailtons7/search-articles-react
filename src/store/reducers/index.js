import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import loggedReducer from "./authReducer";

export default combineReducers({
  articles: articlesReducer,
  logged: loggedReducer
})
