import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import * as PostActions from '../actions/Posts';

class Categories extends Component {

  componentWillMount() {
    // Manage direct url loading
    const {getAllForCategory, category} = this.props;

    if (category ){
      getAllForCategory(category)
    }
  }

  getDateTimeFromTimestamp = (unixTimeStamp) => {
    var date = new Date(unixTimeStamp);
    return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

  genPostList = (posts) => {
    if (posts !== undefined && posts.length > 0) {
        return posts.map((post) => (

          <Post post={post} vote={this.props.vote} deletePost={this.props.deletePost}/>

        ))
    } else {
      return (
        <h3>No Posts found!</h3>
      )
    }
  }
  render() {

    let posts = this.props.posts;
    return (
      <div className="Posts">
      <h2> Posts</h2>
          {this.genPostList(posts)}
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {posts:state.Posts.posts}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllForCategory: (category) => dispatch(PostActions.getAllForCategory(category)),
    deletePost: (post) => dispatch(PostActions.deletePost(post)),
    vote: (id, vote) => dispatch(PostActions.vote(id, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
