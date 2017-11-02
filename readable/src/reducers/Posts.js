import {GET_POST_SUCCESS, GET_POST_ERR,
GET_ALL_POSTS_ERR, GET_ALL_POSTS_SUCCESS,
 CLEAR_FORM_POST, DELETE_POST, VOTE_ON_POST} from '../utils/ActionConstants';;

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
    case CLEAR_FORM_POST:
    return {...state, post:{}}
    case DELETE_POST:
      return {...state, posts: state.posts.filter((post) => {
        return post.id !== action.post.id
      })}
    case VOTE_ON_POST:
      return {...state, posts:state.posts.map((post) => {
        if (post.id === action.id){
          if(action.vote === "upVote"){
            post.voteScore +=1
          }
          else if(action.vote === "downVote"){
            post.voteScore -=1
          }
        }

        return post
      })}

    default:
      return state
  }
}

export default Posts
