import {GET_POST_SUCCESS, GET_POST_ERR,
GET_ALL_POSTS_ERR, GET_ALL_POSTS_SUCCESS} from '../utils/ActionConstants';;

function Posts(state = {}, action) {

  switch (action.type) {
    case GET_POST_SUCCESS:
      return {...state, post: action.data}
    case GET_POST_ERR:
      console.log(action.err);
      return state
    case GET_ALL_POSTS_SUCCESS:
      return {...state, posts: action.data}
    case GET_ALL_POSTS_ERR:
      console.log(action.err);
      return state
    default:
      return state
  }
}

export default Posts
