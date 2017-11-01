import {GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERR,
GET_ALL_FOR_CATEGORY_ERR, GET_ALL_FOR_CATEGORY_SUCCESS} from '../utils/ActionConstants';;

function Categories(state = {}, action) {

  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {...state, categories: action.data}
    case GET_CATEGORIES_ERR:
      console.log(action.err);
      return state
    case GET_ALL_FOR_CATEGORY_SUCCESS:
      return {...state, posts: action.data}
    case GET_ALL_FOR_CATEGORY_ERR:
      console.log(action.err);
      return state
    default:
      return state
  }
}

export default Categories
