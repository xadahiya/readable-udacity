import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import PostDetails from '../components/PostDetails';
import {connect} from 'react-redux';

class PostPage extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <PostDetails post_id={this.props.match.params.id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
