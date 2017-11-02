import * as PostsApi from '../api/Posts';
import {GET_POST_SUCCESS, GET_POST_ERR,
 GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_ERR, VOTE_ON_POST, CLEAR_FORM_POST, DELETE_POST} from '../utils/ActionConstants';

// Actions related to getCategories()
export function getAllSuccess(data) {
  return {type: GET_ALL_POSTS_SUCCESS, data}
}

export function getAllErr(err) {
  return {type: GET_ALL_POSTS_ERR, err}
}

export function getAll() {

  const data = PostsApi.getAll()

  return dispatch => {

    data.then((data) => {
      dispatch(getAllSuccess(data))}).catch(err => dispatch(getAllErr(err)))
  }
}

// Actions related to get()

export function getSuccess(data){

  return {type: GET_POST_SUCCESS, data}

}

export function getErr(err){

  return {type: GET_POST_ERR, err}

}

export function get(id){
  const data = PostsApi.get(id)
  return dispatch => {
    data.then(data => {
      console.log(data)
      dispatch(getSuccess(data))
    }).catch(err => dispatch(getErr(err)))
  }
}


export function clearPost(){
  return {type: CLEAR_FORM_POST}
}

export function deletePost(post){
  PostsApi.del(post.id)
  return {type: DELETE_POST, post}
}

export function vote(id, vote){
  PostsApi.vote(id, vote)
  return {type: VOTE_ON_POST, id, vote}
}
