import * as Category from '../api/Category';
import {GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERR,
 GET_ALL_FOR_CATEGORY_SUCCESS, GET_ALL_FOR_CATEGORY_ERR} from '../utils/ActionConstants';

// Actions related to getCategories()
export function getCategoriesSuccess(data) {
  return {type: GET_CATEGORIES_SUCCESS, data}
}

export function getCategoriesErr(err) {
  return {type: GET_CATEGORIES_ERR, err}
}

export function getCategories() {

  const data = Category.getAll()

  return dispatch => {

    data.then((data) => {
      dispatch(getCategoriesSuccess(data.categories))}).catch(err => dispatch(getCategoriesErr(err)))
  }
}

// Actions related to getAllForCategory()

export function getAllForCategorySuccess(data){

  return {type: GET_ALL_FOR_CATEGORY_SUCCESS, data}

}

export function getAllForCategoryErr(err){

  return {type: GET_ALL_FOR_CATEGORY_ERR, err}

}

export function getAllForCategory(category){
  const data = Category.getAllForCategory(category)
  return dispatch => {
    data.then(data => {
      console.log(data)
      dispatch(getAllForCategorySuccess(data))
    }).catch(err => dispatch(getAllForCategoryErr(err)))
  }
}
