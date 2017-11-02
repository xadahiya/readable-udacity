import {GET_ALL_FOR_POST_SUCCESS, GET_ALL_FOR_POST_ERR,
GET_COMMENT_SUCCESS, GET_COMMENT_ERR, DELETE_COMMENT, VOTE_ON_COMMENT,
SORT_COMMENTS} from '../utils/ActionConstants';

function Comments(state = {}, action) {

  switch (action.type) {
    case GET_COMMENT_SUCCESS:
      return {...state, comment: action.data}
    case GET_COMMENT_ERR:
      console.log(action.err);
      return state
    case GET_ALL_FOR_POST_SUCCESS:
      return {...state, comments: action.data}
    case GET_ALL_FOR_POST_ERR:
      console.log(action.err);
      return state
    case DELETE_COMMENT:
      return {...state, comments: state.comments.filter((comment) => {
        return comment.id !== action.comment.id
      })}
    case VOTE_ON_COMMENT:
      return {...state, comments:state.comments.map((comment) => {
        if (comment.id === action.id){
          if(action.vote === "upVote"){
            comment.voteScore +=1
          }
          else if(action.vote === "downVote"){
            comment.voteScore -=1
          }
        }

        return comment
      })}
    case SORT_COMMENTS:
    console.log("Sorting by ", action.prop)
      return {...state, comments: state['comments'].sort((a,b) => a[action.prop]<b[action.prop]), sortKey: action.prop}

    default:
      return state
  }
}

export default Comments