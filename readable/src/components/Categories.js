import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as CategoryActions from '../actions/Category';
import * as PostsActions from '../actions/Posts';
import {Link} from 'react-router-dom';
import {ButtonGroup} from 'react-bootstrap';

class Categories extends Component {

  componentWillMount() {
    const {getCategories} = this.props;
    getCategories()
  }

  genCategoryList = (categories) => {
    const {getAllForCategory} = this.props;
    if (categories !== undefined) {
      return (
        <div >
          <span className="header">
            Categories</span>
          <ButtonGroup >

            {categories.map((category) => {

              return (
                <Link key={category.path} to={`/${category.path}/posts`} onClick={() => getAllForCategory(category.name)} className="btn btn-default btn-lg cat-link">{category.name}</Link>
              )
            })
}
          </ButtonGroup>
        </div>
      )
    } else {
      return (
        <h3>No Category found!</h3>
      )
    }
  }
  render() {
    const {categories} = this.props;
    return (
      <div className="categories">
        {this.genCategoryList(categories)}
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {categories: state.Categories.categories}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(CategoryActions.getCategories()),
    getAllForCategory: (category) => dispatch(PostsActions.getAllForCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
