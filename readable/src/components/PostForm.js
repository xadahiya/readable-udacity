import React, {Component} from 'react';
import serializeForm from 'form-serialize';
import {connect} from 'react-redux';
import * as CategoryActions from '../actions/Category';
import uuid from 'uuid';
import * as PostsApi from '../api/Posts';

class PostForm extends Component {

  componentWillMount() {
    const {getCategories} = this.props;
    getCategories()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let formData = serializeForm(event.target, {hash: true});
    formData.id = uuid.v4()
    formData.timestamp = Date.now()
    console.log(formData, uuid.v4())
    PostsApi.add(formData);
  }


  render() {
    let {categories} = this.props;
    if (!categories){
      categories = []
    }
    return (
      <div className="new-post-form">
        <h3>
          Create New Post
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title :</label>
            <input type="text" id="title" className="form-control" name="title"/>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author :</label>
            <input type="text" className="form-control" id="author" name="author"/>
          </div>

          <div className="form-group">
            <label htmlFor="body">Body :</label>
            <textarea name="body" rows="5" className="form-control" id="body"/>
          </div>

          <div className="form-group">
          <label htmlFor="category">Category :</label>

          <select className="form-control" id="category" name="category">
          {categories.map(c => (
            <option key={c.name} value={c.path}>
              {c.name}
            </option>
          ))}

          </select>
          </div>

          <input className="btn btn-default" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {categories: state.Categories.categories}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(CategoryActions.getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
