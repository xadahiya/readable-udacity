import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';

class NewOrEditComment extends Component {

  componentWillMount() {}

  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <CommentForm post_id={this.props.match.params.id} comment_id={this.props.match.params.comment_id}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrEditComment);
