import * as PostsApi from '../api/Posts';
import {GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERR,
 GET_ALL_FOR_CATEGORY_SUCCESS, GET_ALL_FOR_CATEGORY_ERR} from '../utils/ActionConstants';

export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const GET_ALL_POSTS_ERR = 'GET_ALL_POSTS_ERR';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERR = 'GET_POST_ERR';

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

export function getAllForCategoryErr(err){

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
