import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Post from './Post';



class PostDetails extends Component {
  render() {
    return (
      "Post details will show here"
    );
  }
}

function mapStateToProps(state) {

  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getAll: () => dispatch(PostsActions.getAll()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
