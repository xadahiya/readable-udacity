import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as CategoryActions from '../actions/Category';
import {Link} from 'react-router-dom';

class Categories extends Component {

  componentWillMount() {
    // console.log("fsf", this.props.match.params.category)
    // getCategories(ca)
    const {getAllForCategory} = this.props;
    getAllForCategory(this.props.match.params.category)
  }

  getDateTimeFromTimestamp = (unixTimeStamp) => {
    var date = new Date(unixTimeStamp);
    return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

  genPostList = (posts) => {
    if (posts !== undefined && posts.length > 0) {
        return posts.map((post) => (
          <li key={post.id}>
            <div></div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Author : {post.author}</p>
            <p>Comments : {post.commentCount}</p>
            <p>
            Votes: {post.voteScore}
            </p>
            <p>Time posted : {this.getDateTimeFromTimestamp(post.timestamp)}</p>
            <Link to={`/${post.category}/posts`}>{post.category}</Link>
          </li>

        ))
    } else {
      return (
        <li>No Posts found!</li>
      )
    }
  }
  render() {
    const {posts} = this.props;
    console.log(this.props)
    return (
      <div className="Posts">
        <ul>
          {this.genPostList(posts)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {posts: state.posts}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllForCategory: (category) => dispatch(CategoryActions.getAllForCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
