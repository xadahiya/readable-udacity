import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as CategoryActions from '../actions/Category';
import {Link} from 'react-router-dom';

class Categories extends Component {

  componentWillMount() {
    const {getCategories} = this.props;
    getCategories()
  }

  genCategoryList = (categories) => {
    if (categories !== undefined) {
      return categories.map((category) => (
        <li key={category.path}>
          <Link to={`/${category.path}/posts`}>{category.name}</Link>
        </li>
      ))
    } else {
      return (
        <li>No Category found!
        </li>
      )
    }
  }
  render() {
    const {categories} = this.props;
    console.log(this.props)
    return (
      <div className="Categories">
        <ul>
          {this.genCategoryList(categories)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {categories: state.categories}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(CategoryActions.getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
