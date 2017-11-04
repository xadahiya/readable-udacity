import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as CategoryActions from '../actions/Category';
import {Link} from 'react-router-dom';
import {ButtonGroup} from 'react-bootstrap';

class Categories extends Component {

  componentWillMount() {
    const {getCategories} = this.props;
    getCategories()
  }

  genCategoryList = (categories) => {

    if (categories !== undefined) {
      return (
        <div >
          <span className="header">
            Categories</span>
          <ButtonGroup >

            {categories.map((category) => {

              return (
                <Link key={category.path} to={`/${category.path}/posts`} className="btn btn-default btn-lg cat-link">{category.name}</Link>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
