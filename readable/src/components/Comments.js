import React, {Component} from 'react';
import {connect} from 'react-redux';
import Comment from './Comment';
import * as CommentActions from '../actions/Comments';

class Comments extends Component {

  componentWillMount() {
    // Manage direct url loading
    const {getAllForPost, post_id} = this.props;

    console.log("fsdf", post_id)
    if (post_id ){
      getAllForPost(post_id)
    }
  }

  getDateTimeFromTimestamp = (unixTimeStamp) => {
    var date = new Date(unixTimeStamp);
    return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

  genCommentList = (comments) => {
    console.log(comments)
    if (comments !== undefined && comments.length > 0) {
        return comments.map((comment) => (
          (! comment.deleted)
             && (<Comment key={comment.id} comment={comment} vote={this.props.vote} deleteComment={this.props.deleteComment}/>)
        ))
    } else {
      return (
        <h3>No Comments found!</h3>
      )
    }
  }
  render() {

    let comments = this.props.comments;
    return (
      <div className="Comments">
      <h3> Comments</h3>
          {this.genCommentList(comments)}
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {comments:state.Comments.comments}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllForPost: (id) => dispatch(CommentActions.getAllForPost(id)),
    deleteComment: (comment) => dispatch(CommentActions.deleteComment(comment)),
    vote: (id, vote) => dispatch(CommentActions.vote(id, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
