import axios from "axios";
import { GET_ARTICLES, ARTICLES_ERROR } from "../../types";

const ARTICLES_URL = ''

export const getArticles = () => async dispatch => {
  try {
    const response = await axios.get(ARTICLES_URL)
    dispatch({
      type: GET_ARTICLES,
      payload: response.data
    })
  } catch(e) {
    dispatch({
      type: ARTICLES_ERROR,
      payload: console.error(e)
    })
  }
}
