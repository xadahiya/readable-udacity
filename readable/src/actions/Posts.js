import * as PostsApi from '../api/Posts';
import {GET_POST_SUCCESS, GET_POST_ERR,
 GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_ERR} from '../utils/ActionConstants';

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
      console.log(data)
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
