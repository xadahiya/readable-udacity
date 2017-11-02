import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import Comments from './Comments';
import * as PostActions from '../actions/Posts';


class PostDetails extends Component {

  componentWillMount() {
    // Manage direct url loading
    const {get} = this.props;
    const post_id = this.props.post_id;
    if (post_id ){
      get(post_id)
    }
  }


  render() {
    const post = this.props.post || {}
    return (
      <div>
      <Post post={post} key={post.id} vote={this.props.vote} deletePost={this.props.deletePost}/>
      <Comments post_id={ this.props.post_id}/>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    post: state.Posts.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get: (id) => dispatch(PostActions.get(id)),
    deletePost: (post) => dispatch(PostActions.deletePost(post)),
    vote: (id, vote) => dispatch(PostActions.vote(id, vote))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
