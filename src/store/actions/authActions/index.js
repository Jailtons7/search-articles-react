import jwt_decode from "jwt-decode"

import { IS_LOGGED } from "../../types"

const verifyToken = () => async dispatch => {
  const token = localStorage.getItem('access')
  const decodedToken = jwt_decode(token)
  let currentDate = new Date()
  return decodedToken.exp * 1000 > currentDate.getTime()
}

export const isLogged = () => async dispatch => {
  if (verifyToken()) {
    dispatch({
      type: IS_LOGGED,
      payload: true
    })
  } else {
    // TODO: renovar o token
    dispatch({
      type: IS_LOGGED,
      payload: false
    })
  }
}
