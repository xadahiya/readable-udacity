import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PostActions from '../actions/Posts';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

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


          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p className="lead">{post.body}</p>
            <div className="post-meta1">
            <span>Comments : {post.commentCount} </span>
            <span>Votes: {post.voteScore} </span>
            <Button onClick={() => this.props.vote(post.id, "upVote")}> Upvote </Button>
            <Button onClick={() => this.props.vote(post.id, "downVote")}> Downvote </Button>

            </div>
            <div className="post-meta2">
            <span>By: {post.author}</span>
            <span> on: {this.getDateTimeFromTimestamp(post.timestamp)} in</span>
            <Button onClick={() => this.props.deletePost(post)}> delete </Button>
            <Link to={`/${post.category}/posts`}> {post.category} </Link>
            <Link to={`/${post.category}/posts/${post.id}/edit`}> Edit </Link>
            <Link to={`/${post.category}/posts/${post.id}`}> View </Link>
            </div>
          </div>

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
